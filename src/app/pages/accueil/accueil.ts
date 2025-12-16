import { Component } from '@angular/core';
import { HomeHero } from '../../components/organisms/home-hero/home-hero';
import { HomeAbout } from '../../components/organisms/home-about/home-about';
import { HomeSkills } from '../../components/organisms/home-skills/home-skills';
import { HomeWorks } from '../../components/organisms/home-works/home-works';
import { HomeContact } from '../../components/organisms/home-contact/home-contact';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HomeHero, HomeAbout, HomeSkills, HomeWorks, HomeContact],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
