import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { ProjectsService } from '../_services/projects.service';
import { animate, style, transition, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate('500ms', keyframes([
            style({opacity: 0, transform: 'translateY(100%)', offset: 0}),
            style({opacity: .2, transform: 'translateY(50%)', offset: .5}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
        ]))
      ])
    ])
  ]
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
