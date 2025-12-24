import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../atoms/nav-item/nav-item';
import { ButtonOutlined } from '../../atoms/button-outlined/button-outlined';

export interface NavigationItem {
  route: string;
  label: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [NavItem, ButtonOutlined],
  templateUrl: './nav-main.html',
  styleUrl: './nav-main.scss',
})
export class NavMain {
  @Input() navigationItems: NavigationItem[] = [];
  @Input() isMenuOpen: boolean = false;
  @Output() menuClosed = new EventEmitter<void>();

  closeMenu(): void {
    this.menuClosed.emit();
  }

  onItemClick(): void {
    this.closeMenu();
  }
}
