import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // This sets the title of the site in each the browser tab
  constructor(private titleService: Title) {
    this.titleService.setTitle('Danny Clynes - Contact');
  }
}
