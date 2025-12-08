import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileCard } from '../../molecules/profile-card/profile-card';
import { SideNavigation } from '../../molecules/side-navigation/side-navigation';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ProfileCard, SideNavigation, RouterLink, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
