import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, ExperienceComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private title: Title, private meta: Meta, private http: HttpClient) {
    this.title.setTitle('M A Muktadeer - Full Stack Developer');
    this.meta.updateTag({
      name: 'description',
      content: 'Experienced Angular & Spring Boot Developer – CV of M A Muktadeer',
    });
  }

   downloadCV() {
    // PDF ফাইলের পাথ
    const filePath = 'assets/file/muktadeer-cv.pdf';

    this.http.get(filePath, { responseType: 'blob' }).subscribe({
      next: (res: any) => {
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(res);

        link.href = url;
        link.download = 'muktadeer-cv.pdf';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      error: (err: any) => {
        console.error('CV ডাউনলোড করতে সমস্যা:', err);
        alert(err);
      }
    });
  }

}
