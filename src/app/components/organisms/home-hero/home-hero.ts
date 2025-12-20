import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfileCard } from '../../molecules/profile-card/profile-card';
import { ButtonFabMini } from '../../atoms/button-fab-mini/button-fab-mini';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [ProfileCard, RouterLink, ButtonFabMini, MatButtonModule, MatIconModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
})
export class HomeHero {
  onFabClick() {
    console.log('FAB clicked in HomeHero!');
    // HomeHero specific logic
  }
}
