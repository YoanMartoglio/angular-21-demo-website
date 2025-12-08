import { Component } from '@angular/core';
import { Hero } from '../../components/organisms/hero/hero';

@Component({
  selector: 'app-accueil',
  imports: [Hero],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
