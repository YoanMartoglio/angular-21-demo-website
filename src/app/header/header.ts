import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LogoName } from '../components/logo-name/logo-name';

@Component({
  selector: 'app-header',
  standalone: true, // Assure-toi que ton composant est bien standalone
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive, LogoName],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'], // Utilise `styleUrls` (pluriel) pour la compatibilité
})
export class Header {} // Renomme la classe en `HeaderComponent`
