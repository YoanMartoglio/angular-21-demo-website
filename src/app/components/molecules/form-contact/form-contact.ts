import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { FormField } from '../../atoms/form-field/form-field';
import { ButtonFilled } from '../../atoms/button-filled/button-filled';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    CommonModule,
    FormField,
    ButtonFilled,
  ],
  templateUrl: './form-contact.html',
  styleUrl: './form-contact.scss',
})
export class FormContact {
  private fb = new FormBuilder();
  private snackBar = new MatSnackBar();

  // EmailJS configuration
  // https://www.emailjs.com/
  private readonly EMAILJS_SERVICE_ID = 'service_rfw9yj8';
  private readonly EMAILJS_TEMPLATE_ID = 'template_3jfzpl9';
  private readonly EMAILJS_PUBLIC_KEY = 'tY09qeOpgs8ScIVeD';

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(2)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isSubmitting = signal(false);

  // Getters pour accéder aux contrôles typés comme FormControl
  get nameControl(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get emailControl(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get subjectControl(): FormControl {
    return this.contactForm.get('subject') as FormControl;
  }

  get messageControl(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    try {
      const formData = this.contactForm.value as ContactForm;

      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          ton_email: 'yoan.martoglio@gmail.com',
        },
        this.EMAILJS_PUBLIC_KEY
      );

      this.snackBar.open('Message envoyé avec succès !', 'Fermer', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      this.contactForm.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      this.snackBar.open(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard, s'il vous plaît.",
        'Fermer',
        {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        }
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
