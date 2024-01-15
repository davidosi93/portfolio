import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  event: string = '';

  constructor(
    public translate: TranslateService,
    private scroller: ViewportScroller
  ) {

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.event = event.lang;
    });
  }

  scrollToSection(sectionId: string): void {
    this.scroller.scrollToAnchor(`${sectionId}`);
  }
}
