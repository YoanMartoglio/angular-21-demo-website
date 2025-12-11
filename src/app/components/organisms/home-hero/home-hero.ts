import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileCard } from '../../molecules/profile-card/profile-card';
import { SideNavigation } from '../../molecules/side-navigation/side-navigation';
import { ButtonFab } from '../../atoms/button-fab/button-fab';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [ProfileCard, SideNavigation, RouterLink, ButtonFab],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
})
export class HomeHero {
  onFabClick() {
    console.log('FAB cliqué dans HomeHero !');
    // Logique spécifique au HomeHero
  }
}
