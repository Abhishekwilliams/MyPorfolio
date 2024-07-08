import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  name!: string;
  email!: string;
  message!: string;

  constructor(private mailService: MailService) {}

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations for page1
    gsap.to("#page1 img", {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 1
    });

    gsap.from("#page1 h1", {
      opacity: 0,
      y: 20,
      duration: 2,
      delay: 1,
      stagger: 0.3
    });

    // Scroll-triggered animation for page2
    gsap.to("#page2 h1", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        // markers: true  
        //markers appears
      }
    });
    gsap.to("#page4 h2", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        // markers: true  
        //markers appears
      }
    });
    gsap.to("#page6 h2", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        // markers: true  
        //markers appears
      }
    });
    // Scroll-triggered animation for page5
    gsap.to("#page5 h2", {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        // markers: true  
        //markers appears
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission

    if (this.name && this.email && this.message) {
      this.mailService.sendEmail(this.name, this.email, this.message).subscribe(
        response => {
          console.log('Email sent successfully', response);
          alert('Email sent successfully');
          this.resetForm();
        },
        error => {
          console.error('Failed to send email', error);
          alert('Failed to send email. Please try again later.');
        }
      );
    } else {
      alert('Please fill in all fields.');
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  addEffects(event: Event) {
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, { scale: 1.05, duration: 0.3 });
  }

  removeEffects(event: Event) {
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, { scale: 1, duration: 0.3 });
  }

 
}