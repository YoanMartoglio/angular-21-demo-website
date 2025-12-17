import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonOutlined } from '../../atoms/button-outlined/button-outlined';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { LogoName } from '../../atoms/logo-name/logo-name';
import { SocialLink } from '../../atoms/social-link/social-link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    LogoName,
    SocialLink,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    ButtonOutlined,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  currentRoute: string = '';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        // Close menu after navigation
        this.isMenuOpen = false;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
