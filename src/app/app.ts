import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/organisms/header/header';
import { Footer } from './components/organisms/footer/footer';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private iconLibrary = inject(FaIconLibrary);

  protected readonly title = signal('angular-21-demo-website');

  ngOnInit() {
    // Register required icons
    this.iconLibrary.addIcons(faHtml5, faCss3Alt, faJs, faAngular, faGithub, faLinkedin);
  }
}
