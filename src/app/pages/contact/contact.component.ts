import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted:', formData);
      const body = new URLSearchParams();
      body.set('name', formData.name);
      body.set('email', formData.email);
      body.set('message', formData.message);
      body.set('subject', formData.subject);

      this.http.post(
        'https://script.google.com/macros/s/AKfycbytsVxVBZPUikkxo54NsESzUIDWNrltz0TpiZZqez2j1bRJQv6tXEI2VX1zJE5AjUXq-A/exec',
        body.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
          },
          responseType: 'text'
        }
      ).subscribe({
        next: response => {
          console.log("Submitted successfully!", response);
          alert('Thank you for your message! I will get back to you soon.');
          this.contactForm.reset();
        },
        error: error => {
          console.error("Submission failed:", error);
          alert('There was an error submitting your message. Please try again later.');
        }
      });
    }

  }
}
