import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [MatButtonModule, FontAwesomeModule],
  templateUrl: './social-link.html',
  styleUrl: './social-link.scss',
})
export class SocialLink {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
