import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  // This sets the title of the site in the browser tab for the current route
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Danny Clynes - Portfolio');
  }

  // ngOnInit is a lifecycle hook that is invoked as soon as the component is initialized, so I use it to load in data for the component
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  
}
