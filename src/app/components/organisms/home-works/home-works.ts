import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

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
  tileKey: string;
}

@Component({
  selector: 'app-home-works',
  imports: [MatGridListModule, AsyncPipe],
  templateUrl: './home-works.html',
  styleUrl: './home-works.scss',
})
export class HomeWorks {
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
      tileKey: 'tiles8',
    },
    {
      projectId: 2,
      title: 'CMA CGM',
      subtitle: "Interface d'IA",
      job: 'UX UI designer',
      logo: 'assets/images/works/cma-cgm/cma-cgm-logo.svg',
      description: "Conception d'une interface d'IA pour la CMA CGM",
      technologies: ['Figma', 'FigJam', 'Design thinking'],
      image: 'assets/images/works/cma-cgm/cma-cgm-corp-2.jpg',
      link: 'https://www.project2.com',
      color: '#1993D0',
      textColor: 'white',
      class: 'cma-cgm-alt',
      ariaLabel: "CMA CGM - Interface d'IA",
      tileKey: 'tiles4',
    },
    {
      projectId: 3,
      title: 'ADNOV',
      subtitle: "Site d'annonces immobilières",
      job: 'UX UI designer & Développeur front-end',
      logo: 'assets/images/works/adnov/adnov-logo.jpg',
      description: 'Maquettes des parcours utilisateurs, et intégration web',
      technologies: ['Figma', 'Design thinking', 'Angular', 'HTML5', 'CSS3', 'Javascript'],
      image: 'assets/images/works/adnov/adnov-corp-1.webp',
      link: 'https://www.project2.com',
      color: '#003C5A',
      textColor: 'white',
      class: 'adnov',
      ariaLabel: 'ADNOV - Immobilier',
      tileKey: 'tiles6',
    },
    {
      projectId: 4,
      title: 'ADNOV',
      subtitle: 'Application web de gestion de données',
      job: 'UX UI designer & Développeur front-end',
      logo: 'assets/images/works/adnov/adnov-logo.jpg',
      description: 'Maquettes des parcours utilisateurs, et intégration web',
      technologies: ['Figma', 'Design thinking', 'Angular', 'HTML5', 'CSS3', 'Javascript'],
      image: 'assets/images/works/adnov/adnov-corp-2.webp',
      link: 'https://www.project2.com',
      color: '#FECF49',
      textColor: 'black',
      class: 'adnov-alt',
      ariaLabel: 'ADNOV - Perval',
      tileKey: 'tiles6',
    },
    {
      projectId: 5,
      title: 'Fleetenergies',
      subtitle: 'Application web de gestion logistique des transports',
      job: 'Lead UX UI designer & LeadDéveloppeur front-end',
      logo: 'assets/images/works/fleetenergies/fleetenergies-logo.png',
      description:
        "Maquettes des parcours utilisateurs, refonte de l'identité visuelle de la maque et intégration web",
      technologies: ['HTML5', 'CSS3', 'Javascript', 'AdobeXD', 'Design thinking'],
      image: 'assets/images/works/fleetenergies/fleetenergies-corp-1.png',
      link: 'https://www.project2.com',
      color: '#409D44',
      textColor: 'white',
      class: 'fleetenergies',
      ariaLabel: 'Fleetenergies - Application web de gestion logistique des transports',
      tileKey: 'tiles5',
    },
    {
      projectId: 5,
      title: 'Externa',
      subtitle: 'Sites web de solutions de gestion RH',
      job: 'Lead UX UI designer & Lead Développeur front-end',
      logo: 'assets/images/works/externa/externa-logo.png',
      description: 'Refonte des sites Wordpress et refactorisation vers Angular 21',
      technologies: [
        'Angular',
        'HTML5',
        'CSS3',
        'Javascript',
        'Wordpress',
        'Figma',
        'Design thinking',
      ],
      image: 'assets/images/works/externa/externa-corp-1.jpg',
      link: 'https://www.project2.com',
      color: '#c8a778',
      textColor: 'black',
      class: 'externa',
      ariaLabel: 'Externa - Sites web de solutions de gestion RH',
      tileKey: 'tiles7',
    },
    {
      projectId: 6,
      title: "Château de l'Engarran",
      subtitle: 'Site e-commerce et site vitrine',
      job: 'Lead développeur front-end',
      logo: 'assets/images/works/engarran/engarran-logo.svg',
      description: 'Intégration web',
      technologies: ['HTML5', 'CSS3', 'Javascript', 'Presatshop', 'Wordpress'],
      image: 'assets/images/works/engarran/engarran-corp-1.jpg',
      link: 'https://www.project2.com',
      color: '#C1A050',
      textColor: 'white',
      class: 'engarran',
      ariaLabel: "Château de l'Engarran - Site e-commerce et site vitrine",
      tileKey: 'tiles6',
    },
    {
      projectId: 7,
      title: 'apptamin',
      subtitle: "Site web de l'app video agency",
      job: 'Lead développeur front-end',
      logo: 'assets/images/works/apptamin/apptamin-logo.png',
      description: 'Intégration web et refonte du site Wordpress',
      technologies: ['HTML5', 'CSS3', 'Javascript', 'Wordpress'],
      image: 'assets/images/works/apptamin/apptamin-corp-1.jpg',
      link: 'https://www.project2.com',
      color: '#003C5A',
      textColor: 'white',
      class: 'apptamin',
      ariaLabel: "apptamin - Site web de l'app video agency",
      tileKey: 'tiles6',
    },
  ];

  worksGridLayout!: Observable<any>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.worksGridLayout = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(
        map(({ matches }) => {
          if (matches) {
            return {
              columns: 1,
              gutters: '16px',
              tiles1: { cols: 1, rows: 1 },
              tiles2: { cols: 1, rows: 1 },
              tiles3: { cols: 1, rows: 1 },
              tiles4: { cols: 1, rows: 1 },
              tiles5: { cols: 1, rows: 1 },
              tiles6: { cols: 1, rows: 1 },
              tiles7: { cols: 1, rows: 1 },
              tiles8: { cols: 1, rows: 1 },
              tiles9: { cols: 1, rows: 1 },
              tiles10: { cols: 1, rows: 1 },
              tiles11: { cols: 1, rows: 1 },
              tiles12: { cols: 1, rows: 1 },
            };
          }

          return {
            columns: 12,
            gutters: '8px',
            tiles1: { cols: 1, rows: 1 },
            tiles2: { cols: 2, rows: 1 },
            tiles3: { cols: 3, rows: 1 },
            tiles4: { cols: 4, rows: 1 },
            tiles5: { cols: 5, rows: 1 },
            tiles6: { cols: 6, rows: 1 },
            tiles7: { cols: 7, rows: 1 },
            tiles8: { cols: 8, rows: 1 },
            tiles9: { cols: 9, rows: 1 },
            tiles10: { cols: 10, rows: 1 },
            tiles11: { cols: 11, rows: 1 },
            tiles12: { cols: 12, rows: 1 },
          };
        })
      );
  }

  getTileLayout(layout: any, index: number): { cols: number; rows: number } {
    const tileKey = `tiles${index + 1}` as keyof typeof layout;
    return layout[tileKey] || { cols: 1, rows: 1 };
  }

  getTileDimensions(layout: any, tileKey: string): { cols: number; rows: number } {
    return layout[tileKey] || { cols: 1, rows: 1 };
  }
}
