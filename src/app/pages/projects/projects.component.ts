import { Component } from '@angular/core';
import { ExpandableDescriptionComponent } from "../expandable-description/expandable-description.component";

interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  gitUrl?: string;
}
@Component({
  selector: 'app-projects',
  imports: [ExpandableDescriptionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'UMS (Dhaka Bank)',
      description: `A secure and scalable User Management
      System (UMS) developed for Dhaka Bank to streamline internal user authentication,
      authorization, and profile management. The system provides robust access control and
      seamless integration with existing bank infrastructure.`,
      url: 'project1.png',
      technologies: ['Angular', 'Spring Boot', 'Oracle']
    },
    {
      title: 'e-Signature Management System',
      description: `A secure and efficient system for managing digital signatures to streamline document approval workflows and reduce manual paperwork.`,
      url: 'elogin.png',
      technologies: ['Angular 11', 'Java 8', 'Jasper Reports'],
      gitUrl: 'https://github.com/ma-muktadeer/e-signature',
    },
    {
      title: 'Train Matrix – Application Description',
      description: `Train Matrix is a modern Angular 19 web application designed to provide comprehensive
      train information between selected stations. Users can easily search and view a complete list of trains
      operating from a departure station to a destination station, along with detailed insights about each train.`,
      url: 'trlogin.png',
      technologies: ['Angular 19'],
      gitUrl: 'https://github.com/ma-muktadeer/train_information'
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
