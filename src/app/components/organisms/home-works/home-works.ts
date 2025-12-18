import { Component, OnInit, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface WorksExamples {
  projectId: number;
  title: string;
  subtitle: string;
  job: string;
  logo: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  color: string;
  textColor: string;
  class: string;
  ariaLabel: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-home-works',
  imports: [MatGridListModule],
  templateUrl: './home-works.html',
  styleUrl: './home-works.scss',
})
export class HomeWorks implements OnInit {
  /**
   * Convertit une couleur hexadécimale en valeurs RGB
   * @param hex - Couleur hexadécimale (ex: #E26352)
   * @returns String au format "r,g,b" (ex: "226,99,82")
   */
  hexToRgb(hex: string): string {
    if (!hex.startsWith('#')) {
      return hex; // Retourne tel quel si ce n'est pas une couleur hex
    }
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }

  works: WorksExamples[] = [
    {
      projectId: 1,
      title: 'CMA CGM',
      subtitle: 'Site e-commerce',
      job: 'Développeur front-end',
      logo: 'assets/images/works/cma-cgm/cma-cgm-logo.svg',
      description: 'Développement front-end pour le site e-commerce de la CMA CGM',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
      image: 'assets/images/works/cma-cgm/cma-cgm-corp.jpg',
      link: 'https://www.cma-cgm.com',
      color: '#E26352',
      textColor: 'white',
      class: 'cma-cgm',
      ariaLabel: 'CMA CGM - Site e-commerce',
      cols: 5,
      rows: 1,
    },
    {
      projectId: 2,
      title: 'CMA CGM',
      subtitle: "Interface d'IA",
      job: 'UX UI designer',
      logo: 'assets/images/works/cma-cgm/cma-cgm-logo.svg',
      description: "Conception d'une interface d'IA pour la CMA CGM",
      technologies: ['Figma', 'FigJam', 'Design thinking'],
      image: 'assets/images/works/cma-cgm/cma-cgm-corp.jpg',
      link: 'https://www.project2.com',
      color: '#1993D0',
      textColor: 'white',
      class: 'cma-cgm-alt',
      ariaLabel: "CMA CGM - Interface d'IA",
      cols: 3,
      rows: 1,
    },
    {
      projectId: 3,
      title: 'ADNOV',
      subtitle: "Site d'annonces immobilières",
      job: 'UX UI designer & Développeur front-end',
      logo: 'assets/images/works/adnov/adnov-logo.jpg',
      description: 'Maquettes des parcours utilisateurs, et intégration web',
      technologies: ['Figma', 'Design thinking', 'Angular', 'HTML5', 'CSS3', 'Javascript'],
      image: 'assets/images/works/cma-cgm/cma-cgm-corp.jpg',
      link: 'https://www.project2.com',
      color: '#1993D0',
      textColor: 'white',
      class: 'cma-cgm-alt',
      ariaLabel: 'CMA CGM - Immobilier',
      cols: 4,
      rows: 1,
    },
    {
      projectId: 4,
      title: 'ADNOV',
      subtitle: 'Application web de gestion de données',
      job: 'UX UI designer & Développeur front-end',
      logo: 'assets/images/works/adnov/adnov-logo.jpg',
      description: 'Maquettes des parcours utilisateurs, et intégration web',
      technologies: ['Figma', 'Design thinking', 'Angular', 'HTML5', 'CSS3', 'Javascript'],
      image: 'assets/images/works/cma-cgm/cma-cgm-corp.jpg',
      link: 'https://www.project2.com',
      color: '#1993D0',
      textColor: 'white',
      class: 'cma-cgm-alt',
      ariaLabel: 'CMA CGM - Perval',
      cols: 4,
      rows: 1,
    },
  ];

  private breakpointObserver = inject(BreakpointObserver);
  cols: number = 8;

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.Tablet,
        Breakpoints.Web,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.HandsetPortrait] || breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols = 2;
          console.log('Mobile detected, cols:', this.cols); // Debug
        } else {
          this.cols = 8;
          console.log('Desktop detected, cols:', this.cols); // Debug
        }
      });
  }
}
