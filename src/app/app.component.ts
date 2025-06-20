import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'aos/dist/aos.css';
import { slideInAnimation } from './model/animation';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'muktadeer-portfolio';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || 'primary';
  }
  async ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const AOS = await import('aos');
      AOS.init({
        duration: 1000,
        once: false,
        offset: 80,
      });
    }
  }
}
