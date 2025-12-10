import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  skills = ['HTML', 'CSS', 'JS', 'Vue', 'Angular'];
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
