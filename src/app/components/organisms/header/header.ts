import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { LogoName } from '../../atoms/logo-name/logo-name';
import { SocialLink } from '../../atoms/social-link/social-link';

@Component({
  selector: 'app-header',
  standalone: true, // Assure-toi que ton composant est bien standalone
  imports: [MatToolbarModule, MatButtonModule, LogoName, SocialLink, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'], // Utilise `styleUrls` (pluriel) pour la compatibilité
})
export class Header {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
} // Renomme la classe en `HeaderComponent`
