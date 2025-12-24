import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projets',
  imports: [CommonModule, MatGridListModule, AsyncPipe, RouterModule],
  templateUrl: './projets.html',
  styleUrl: './projets.scss',
})
export class Projets {
  projects: Project[] = [];

  projectsGridLayout!: Observable<any>;

  constructor(
    private projectsService: ProjectsService, // Inject Service
    private breakpointObserver: BreakpointObserver
  ) {
    this.projects = this.projectsService.getAllProjects(); // Get all projects from Service

    // Generate grid layout based on breakpoints
    this.projectsGridLayout = this.breakpointObserver
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
