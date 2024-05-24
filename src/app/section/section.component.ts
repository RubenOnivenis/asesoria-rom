import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  constructor() { }

  ngOnInit(): void {
  }

  activarAnimacion(): void {
    const sections = document.querySelectorAll('.half-section-right, .half-section-left');
    const screenHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionPos = section.getBoundingClientRect().top;
      if (sectionPos < screenHeight) {
        section.classList.add('animacion-activada');
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.activarAnimacion();
  }
}
