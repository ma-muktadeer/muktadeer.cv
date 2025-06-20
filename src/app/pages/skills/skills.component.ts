import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
}
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
skills: Skill[] = [
    { name: 'Angular', level: 80, icon: 'fab fa-angular' },
    { name: 'Java/Spring Boot', level: 85, icon: 'fab fa-java' },
    { name: 'Flutter', level: 70, icon: 'fas fa-mobile-alt' },
    { name: 'Oracle DB', level: 75, icon: 'fas fa-database' },
    { name: 'JavaScript', level: 80, icon: 'fab fa-js-square' },
    { name: 'Android', level: 70, icon: 'fab fa-android' },
  ];
}
