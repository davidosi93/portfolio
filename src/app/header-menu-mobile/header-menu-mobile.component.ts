import { Component, AfterViewInit, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header-menu-mobile',
  templateUrl: './header-menu-mobile.component.html',
  styleUrls: ['./header-menu-mobile.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('hidden', style({
        transform: 'translateX(0)'
      })),
      state('visible', style({
        transform: 'translateX(-1180px)'
      })),
      transition('hidden <=> visible', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderMenuMobileComponent implements AfterViewInit, OnInit {
  isMenuOpen: boolean = false;

  @HostBinding('@slideAnimation') get slideAnimation() {
    return this.isMenuOpen ? 'visible' : 'hidden';
  }

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }
}
