import { Component, ElementRef, Renderer2 } from '@angular/core';
import { slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    slideInUpOnEnterAnimation({ duration: 300 }),
    slideOutDownOnLeaveAnimation({ duration: 500 })
  ]
})
export class FooterComponent {

  isImprintOpen: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  toggleImprint() {
    this.isImprintOpen = !this.isImprintOpen;
    this.checkScroll();
  }

  checkScroll() {
    if (this.isImprintOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }
}
