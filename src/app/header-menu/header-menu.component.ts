import { Component } from '@angular/core';
import { slideInRightOnEnterAnimation, slideOutRightOnLeaveAnimation } from 'angular-animations';
import { TranslateService } from "@ngx-translate/core";

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
  burgerMenu: any = 'assets/img/burger_menu.png';
  closeMenu: any = 'assets/img/close.png';
  isGerman: boolean = false;

  constructor(public translate: TranslateService) {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.burgerMenu = this.closeMenu;
    } else {
      this.burgerMenu = 'assets/img/burger_menu.png';
      this.closeMenu = 'assets/img/close.png';
    }
  }
}
