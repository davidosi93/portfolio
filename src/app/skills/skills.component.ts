import { Component } from '@angular/core';
import * as Aos from 'aos';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  event: string = '';

  constructor(public translate: TranslateService) {

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.event = event.lang;
    });
  }

  ngOnInit(): void {
    Aos.init();
  }
}
