import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';

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
        markers: false //majke it true to make markers appear.
      }
    });
    //  gsap.to(".skills-list", {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".skills-list",
    //     scroller: "body",
    //     start: "top 80%",
    //     end: "top 50%",
    //     scrub: true,
    //     markers: true
    //   }
    // });
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