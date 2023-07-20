import { Component } from '@angular/core';
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

  toggleImprint() {
    this.isImprintOpen = !this.isImprintOpen;
  }

}
