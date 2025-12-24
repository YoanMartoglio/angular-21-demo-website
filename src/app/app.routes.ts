import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Projets } from './pages/projets/projets';
import { Expertises } from './pages/expertises/expertises';
import { Contact } from './pages/contact/contact';
import { ProjectDetail } from './pages/projet-detail/projet-detail';

export const routes: Routes = [
  { path: '', component: Accueil, title: 'Acceuil', pathMatch: 'full' },
  { path: 'projets', component: Projets, title: 'Projets' },
  { path: 'projets/:slug', component: ProjectDetail, title: 'Détail du projet' },
  { path: 'expertises', component: Expertises, title: 'Expertises' },
  { path: 'contact', component: Contact, title: 'Contact' },
];
