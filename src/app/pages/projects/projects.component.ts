import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
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
      technologies: ['Angular', 'Spring Boot', 'Oracle'] 
    },
    { 
      title: 'Account Statement (Dhaka Bank)', 
      description: 'Bank account statement generation system', 
      technologies: ['Java', 'Jasper Reports'] 
    },
    { 
      title: 'DPS Portal (Dhaka Bank)', 
      description: 'Deposit Pension Scheme management portal', 
      technologies: ['Angular', 'Java'] 
    },
    { 
      title: 'Vehicle Management (Army)', 
      description: 'Vehicle tracking and management system', 
      technologies: ['Flutter', 'Spring Boot'] 
    }
  ];
}
