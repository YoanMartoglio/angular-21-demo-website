import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface Icon {
  fontIcon: 'fa' | 'material';
  name: string;
}

@Component({
  selector: 'app-icon-round',
  standalone: true,
  imports: [MatIconModule, CommonModule, FaIconComponent],
  templateUrl: './icon-round.html',
  styleUrl: './icon-round.scss',
})
export class IconRound {
  icon = input.required<Icon>();
  class = input<string>('html');
  text = input<string>('');
  ariaLabel = input<string>('Icone');
  iconSize = input<string>('w-24 h-24');
  iconFontSize = input<string>('text-24');
}
