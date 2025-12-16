import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-outlined',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-outlined.html',
  styleUrl: './button-outlined.scss',
})
export class ButtonOutlined {
  // inputs
  icon = input<string>('home');
  ariaLabel = input<string>('Action principale');
  color = input<string>('primary');
  // output
  clicked = output<void>(); // event emitted to the parent

  handleClick() {
    this.clicked.emit();
  }
}
