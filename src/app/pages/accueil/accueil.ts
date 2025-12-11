import { Component } from '@angular/core';
import { HomeHero } from '../../components/organisms/home-hero/home-hero';
import { HomeAbout } from '../../components/organisms/home-about/home-about';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HomeHero, HomeAbout],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
