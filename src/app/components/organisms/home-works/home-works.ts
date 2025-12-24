import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService, Project } from '../../../services/projects.service';

@Component({
  selector: 'app-home-works',
  imports: [MatGridListModule, AsyncPipe, RouterModule],
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

  // Use Service to get projects
  works: Project[] = [];

  worksGridLayout!: Observable<any>;

  constructor(
    private projectsService: ProjectsService, // Inject Service
    private breakpointObserver: BreakpointObserver
  ) {
    this.works = this.projectsService.getAllProjects(); // Get all projects from Service

    // Generate grid layout based on breakpoints
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

  // Get tile dimensions based on layout and tile key
  getTileDimensions(layout: any, tileKey: string): { cols: number; rows: number } {
    return layout[tileKey] || { cols: 1, rows: 1 };
  }
}
