import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Social Media API',
    summary: 'Spring Boot API modeling Twitter with 31 CRUD endpoints',
    description: '',
    projectLink: '',
    tags: [Tag.SPRING, Tag.JAVA, Tag.POSTGRESQL],
    pictures: []
  }

  // This sets the title of the site in each the browser tab
  constructor(private titleService: Title) {
    this.titleService.setTitle('Danny Clynes - Portfolio');
  }

  
}
