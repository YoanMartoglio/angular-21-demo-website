import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projet-detail.html',
  styleUrl: './projet-detail.scss',
})
export class ProjectDetail implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.project = this.projectsService.getProjectBySlug(slug);
      if (!this.project) {
        // Redirect to the list if project not found
        this.router.navigate(['/projets']);
      }
    }
  }
}
