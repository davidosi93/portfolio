import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  event: string = '';

  constructor(public translate: TranslateService) {

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.event = event.lang;
    });
  }
}
