import { Component } from '@angular/core';
import { SocialLink } from '../../atoms/social-link/social-link';

@Component({
  selector: 'app-footer',
  imports: [SocialLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
