import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, NavigationEnd } from '@angular/router';
import { LogoName } from '../../atoms/logo-name/logo-name';
import { SocialLink } from '../../atoms/social-link/social-link';
import { ThemeToggle } from '../../atoms/theme-toggle/theme-toggle';
import { NavMain, NavigationItem } from '../../molecules/nav-main/nav-main';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    LogoName,
    SocialLink,
    MatIconModule,
    ThemeToggle,
    NavMain,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  currentRoute: string = '';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
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

  navigationItems: NavigationItem[] = [
    { route: '/', label: 'Accueil', ariaLabel: 'Accueil' },
    { route: '/projets', label: 'Projets', ariaLabel: 'Projets' },
    { route: '/expertises', label: 'Expertises', ariaLabel: 'Expertises' },
    { route: '/contact', label: 'Contact', ariaLabel: 'Contact' },
  ];
}
