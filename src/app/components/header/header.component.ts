import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgClass ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private http: HttpClient) {

  }

  toggleMenu(ref?: string) {
    debugger
    if(ref){
      this.isMenuOpen = false;
    }else{
      this.isMenuOpen = !this.isMenuOpen;
    }
    // const navLinks = document.querySelector('.nav-links');
    // navLinks?.classList.toggle('active');
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
