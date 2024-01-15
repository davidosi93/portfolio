import { Component } from '@angular/core';
import * as Aos from 'aos';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  event: string = '';

  constructor(
    public translate: TranslateService,
    private scroller: ViewportScroller
  ) {

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.event = event.lang;
    });
  }

  ngOnInit(): void {
    Aos.init();
  }

  scrollToSection(sectionId: string): void {
    this.scroller.scrollToAnchor(`${sectionId}`);
  }
}
