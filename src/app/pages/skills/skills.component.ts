import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
  class?: string;
}
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
skills: Skill[] = [
    { name: 'Angular', level: 80, class:'text-red-600', icon: 'fab fa-angular' },
    { name: 'Java/Spring Boot', level: 85, class:'text-red-600', icon: 'fab fa-java' },
    { name: 'Flutter', level: 70, class:'text-blue-600', icon: 'fas fa-mobile-alt' },
    { name: 'Oracle DB', level: 75, class:'text-blue-400', icon: 'fas fa-database' },
    { name: 'JavaScript', level: 80, class:'text-[#fdd663]', icon: 'fab fa-js-square' },
    { name: 'Android', level: 70, class:'text-[#85E42C]', icon: 'fab fa-android' },
  ];
}
