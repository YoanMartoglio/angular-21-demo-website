import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-fab',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './button-fab.html',
  styleUrl: './button-fab.scss',
})
export class ButtonFab {
  // inputs
  icon = input<string>('add');
  ariaLabel = input<string>('Action principale');
  color = input<string>('primary');
  routerLink = input<string | any[] | null>(null);

  // output
  clicked = output<void>(); // event emitted to the parent

  handleClick() {
    this.clicked.emit();
  }
}
