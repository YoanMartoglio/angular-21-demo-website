import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.scss',
})
export class NavItem {
  @Input() route: string = '';
  @Input() label: string = '';
  @Input() ariaLabel: string = '';
  @Output() itemClicked = new EventEmitter<void>();

  onItemClick(): void {
    this.itemClicked.emit();
  }
}
