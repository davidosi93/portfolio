import { Component } from '@angular/core';
import { slideInRightOnEnterAnimation, slideOutRightOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  animations: [
    slideInRightOnEnterAnimation({ duration: 300 }),
    slideOutRightOnLeaveAnimation({ duration: 500 })
  ]
})
export class HeaderMenuComponent {
  isMenuOpen: boolean = false;

  constructor() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
