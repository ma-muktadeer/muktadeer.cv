import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  gitUrl?: string;
}
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'UMS (Dhaka Bank)',
      description: 'User Management System developed for Dhaka Bank',
      url: 'project1.png',
      technologies: ['Angular', 'Spring Boot', 'Oracle']
    },
    {
      title: 'Account Statement (Dhaka Bank)',
      description: 'Bank account statement generation system',
      url: 'project2.png',
      technologies: ['Java', 'Jasper Reports'],
      gitUrl: 'https://github.com/ma-muktadeer/train_information'
    },
    {
      title: 'DPS Portal (Dhaka Bank)',
      description: 'Deposit Pension Scheme management portal',
      url: 'project3.png',
      technologies: ['Angular', 'Java']
    },
    {
      title: 'Vehicle Management (Army)',
      description: 'Vehicle tracking and management system',
      url: 'project4.png',
      technologies: ['Flutter', 'Spring Boot']
    },
    {
      title: 'Vehicle Management (Army)',
      description: 'Vehicle tracking and management system',
      url: 'project5.png',
      technologies: ['Flutter', 'Spring Boot']
    },
    {
      title: 'Vehicle Management (Army)',
      description: 'Vehicle tracking and management system',
      url: 'project6.png',
      technologies: ['Flutter', 'Spring Boot']
    },
    {
      title: 'Vehicle Management (Army)',
      description: 'Vehicle tracking and management system',
      url: 'project7.png',
      technologies: ['Flutter', 'Spring Boot']
    },
  ];
}
