import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../models/Project';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  featureProject = {} as Project;

  // TitleService sets the title of the site in each the browser tab
  constructor(private titleService: Title, private projectService: ProjectsService, private httpClient: HttpClient) {
    this.titleService.setTitle('Danny Clynes - Home');
  }
  ngOnInit(): void {
    this.featureProject = this.projectService.GetProjectById(0);
    // get API response body from GitHub profile (this should be in a service class)
    const response = this.httpClient.get<any>('https://api.github.com/users/dannyc12').subscribe(data => {
      console.log(data)
    });


  }

  
}
