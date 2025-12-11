import { Component } from '@angular/core';
import { HomeHero } from '../../components/organisms/home-hero/home-hero';

@Component({
  selector: 'app-accueil',
  imports: [HomeHero],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
