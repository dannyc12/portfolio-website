import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  // This sets the title of the site in each the browser tab
  constructor(private titleService: Title) {
    this.titleService.setTitle('Danny Clynes - Resume');
  }
}
