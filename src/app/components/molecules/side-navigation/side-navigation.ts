import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './side-navigation.html',
  styleUrl: './side-navigation.scss',
})
export class SideNavigation {
  navItems = [
    { route: '', icon: 'assets/images/07ed0f9bf4d53d5abda4c057a878f2c8dbe88bbc.svg', label: 'Accueil' },
    { route: '/expertises', icon: 'assets/images/edd7271c480e6c724922dbfa2faf50f61d67b9db.svg', label: 'About me' },
    { route: '/expertises', icon: 'assets/images/cf1d2f060483305389eff02b827f4d3ba6188295.svg', label: 'Skills' },
    { route: '/projets', icon: 'assets/images/e3a174d1b5cf450be9dae6578fc4bfc7fa4b7f80.svg', label: 'Works' },
    { route: '/contact', icon: 'assets/images/789e96554cc743b677550145901cb89c9d622b37.svg', label: 'Blogs' },
    { route: '/contact', icon: 'assets/images/436e7463d828ccd3488c00c960a25e2a7d587ffb.svg', label: 'Contact' },
  ];
}

