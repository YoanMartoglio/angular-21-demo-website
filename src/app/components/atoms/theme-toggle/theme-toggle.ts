import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle implements OnInit {
  isDarkTheme = true;

  ngOnInit(): void {
    // Récupérer le thème depuis localStorage
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      this.isDarkTheme = savedTheme === 'true';
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
    this.applyTheme();
  }

  private applyTheme(): void {
    const html = document.documentElement;
    const body = document.body;

    if (this.isDarkTheme) {
      // Mode dark : retirer light-theme et ajouter dark-theme
      html.classList.remove('light-theme');
      html.classList.add('dark-theme');
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      // Mode light : retirer dark-theme et ajouter light-theme
      html.classList.remove('dark-theme');
      html.classList.add('light-theme');
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

  getIcon(): string {
    return this.isDarkTheme ? 'light_mode' : 'dark_mode';
  }

  getAriaLabel(): string {
    return this.isDarkTheme ? 'Activer le thème clair' : 'Activer le thème sombre';
  }
}
