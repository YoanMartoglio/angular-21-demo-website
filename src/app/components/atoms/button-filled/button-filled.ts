import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-filled',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-filled.html',
  styleUrl: './button-filled.scss',
  host: {
    '[class]': 'class()',
  },
})
export class ButtonFilled {
  // inputs
  icon = input<string | null>(null); // Icône optionnelle
  ariaLabel = input<string>('Action principale');
  class = input<string>('');
  color = input<string>('primary');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button'); // Type de bouton pour les formulaires
  // output
  clicked = output<void>(); // event emitted to the parent

  handleClick() {
    this.clicked.emit();
  }
}
