import { Component, input, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

export type FormFieldType = 'text' | 'email' | 'textarea' | 'number';

@Component({
  selector: 'app-form-field',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
  // Inputs with inline literals types
  control = input.required<FormControl>();
  label = input.required<string>();
  placeholder = input<string>('');
  type = input<'text' | 'email' | 'textarea' | 'tel' | 'url' | 'password' | 'number'>('text');
  appearance = input<'fill' | 'outline'>('outline');
  rows = input<number>(4); // for textarea only
  hint = input<string>('');
  autocomplete = input<string>('');

  // Computed properties
  // 1. if type is textarea, then rows is required
  isTextarea = computed(() => this.type() === 'textarea');

  // 2. verify validation state
  hasError = computed(() => {
    const ctrl = this.control();
    return ctrl.invalid && (ctrl.touched || ctrl.dirty);
  });

  // Function to get error message
  getErrorMessage(): string {
    const ctrl = this.control();
    if (!ctrl.errors) return '';

    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    }
    if (ctrl.hasError('email')) {
      return 'Email invalide';
    }
    if (ctrl.hasError('minlength')) {
      const requiredLength = ctrl.errors['minlength']?.requiredLength;
      return `Minimum ${requiredLength} caractères autorisés`;
    }
    if (ctrl.hasError('maxlength')) {
      const allowedLength = ctrl.errors['maxlength']?.requiredLength;
      return `Maximum ${allowedLength} caractères autorisés`;
    }
    if (ctrl.hasError('pattern')) {
      return 'Format invalide';
    }
    return 'Valeur invalide';
  }
}
