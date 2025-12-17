import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IconRound } from '../../atoms/icon-round/icon-round';

interface SkillIcon {
  icon: {
    fontIcon: 'fa' | 'material'; // Literal type
    name: string;
  };
  text: string;
  class: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-home-skills',
  imports: [MatCardModule, IconRound],
  templateUrl: './home-skills.html',
  styleUrl: './home-skills.scss',
})
export class HomeSkills {
  // Icons list data
  icons: SkillIcon[] = [
    {
      icon: {
        fontIcon: 'fa',
        name: 'html5',
      },
      text: 'HTML',
      class: 'html',
      ariaLabel: 'Icône Accueil',
    },
    {
      icon: {
        fontIcon: 'fa',
        name: 'css3-alt',
      },
      text: 'CSS',
      class: 'css',
      ariaLabel: 'Icône Accueil',
    },
    {
      icon: {
        fontIcon: 'fa',
        name: 'js',
      },
      text: 'JavaScript',
      class: 'js',
      ariaLabel: 'Icône Accueil',
    },
    {
      icon: {
        fontIcon: 'fa',
        name: 'angular',
      },
      text: 'Angular',
      class: 'angular',
      ariaLabel: 'Icône Accueil',
    },
  ];
}
