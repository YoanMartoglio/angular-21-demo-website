import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ButtonExtendedFab } from '../../atoms/button-extended-fab/button-extended-fab';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule, ButtonExtendedFab],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
  host: {
    class: 'w-[400px]',
  },
})
export class ProfileCard {
  skills = ['HTML', 'CSS', 'JS', 'Vue', 'Angular'];
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
