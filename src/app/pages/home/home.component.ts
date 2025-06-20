import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, ExperienceComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('M A Muktadeer - Full Stack Developer');
    this.meta.updateTag({
      name: 'description',
      content: 'Experienced Angular & Spring Boot Developer – CV of M A Muktadeer',
    });
  }

}
