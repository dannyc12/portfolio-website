import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  
  // This sets the title of the site in each the browser tab
  constructor(private titleService: Title) {
    this.titleService.setTitle('Danny Clynes - Home');
  }
}
