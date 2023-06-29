import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }
}
