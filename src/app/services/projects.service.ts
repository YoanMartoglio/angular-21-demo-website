import { Injectable } from '@angular/core';

export interface Project {
  projectId: number;
  slug: string;
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

@Injectable({
  providedIn: 'root', //Service available globally
})
export class ProjectsService {
  private projects: Project[] = [
    {
      projectId: 1,
      slug: 'cma-cgm-site-ecommerce',
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
      slug: 'cma-cgm-interface-ia',
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
      slug: 'adnov-immobilier',
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
      slug: 'adnov-perval',
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
      slug: 'fleetenergies-logistique',
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
      projectId: 6,
      slug: 'externa-rh',
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
      projectId: 7,
      slug: 'engarran-ecommerce',
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
      projectId: 8,
      slug: 'apptamin-video-agency',
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

  // Method to get all projects
  getAllProjects(): Project[] {
    return this.projects;
  }

  // Method to get a project by its slug
  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find((p) => p.slug === slug);
  }

  // Method to get a project by its id
  getProjectById(id: number): Project | undefined {
    return this.projects.find((p) => p.projectId === id);
  }
}
