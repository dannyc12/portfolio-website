import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // This sets the title of the site in each the browser tab
  constructor(private titleService: Title) {
    this.titleService.setTitle('Danny Clynes - Portfolio');
  }
}
