import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { FormField } from '../../atoms/form-field/form-field';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-home-contact',
  imports: [
    ReactiveFormsModule,
    //MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    CommonModule,
    FormField,
  ],
  templateUrl: './home-contact.html',
  styleUrl: './home-contact.scss',
})
export class HomeContact {
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

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'Ce champ est requis';
    }
    if (field?.hasError('email')) {
      return 'Email invalide';
    }
    if (field?.hasError('minlength')) {
      const requiredLength = field.errors?.['minlength']?.requiredLength;
      return `Minimum ${requiredLength} caractères requis`;
    }
    return '';
  }
}
