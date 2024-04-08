import { Component } from '@angular/core';
import { slideInRightOnEnterAnimation, slideOutRightOnLeaveAnimation } from 'angular-animations';
import { TranslateService } from "@ngx-translate/core";
import { ViewportScroller } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';

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
  germanFlag: any = 'assets/img/germany.png';
  ukFlag: any = 'assets/img/uk.png';

  constructor(
    public translate: TranslateService,
    private scroller: ViewportScroller,
    public contact: ContactComponent
  ) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.burgerMenu = this.closeMenu;
    } else {
      this.burgerMenu = 'assets/img/burger_menu.png';
      this.closeMenu = 'assets/img/close.png';
    }
  }

  changeLang() {
    this.isGerman = !this.isGerman;
    this.translate.use(this.isGerman ? 'de' : 'en');
    if (this.isGerman) {
      this.germanFlag = this.ukFlag;
    } else {
      this.germanFlag = 'assets/img/germany.png';
      this.ukFlag = 'assets/img/uk.png';
    }
  }

  scrollToSection(sectionId: string): void {
    this.scroller.scrollToAnchor(`${sectionId}`);
    this.contact.togglePrivacy();
  }
}
