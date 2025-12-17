import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-extended-fab',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './button-extended-fab.html',
  styleUrl: './button-extended-fab.scss',
})
export class ButtonExtendedFab {
  // Dynamic inputs
  icon = input<string>('add');
  text = input<string>('Add');
  color = input<string>('primary');
  ariaLabel = input<string>('Action principale');
  routerLink = input<string | any[] | null>(null);

  // Event emitted to parent
  clicked = output<void>();

  handleClick() {
    this.clicked.emit();
  }
}
