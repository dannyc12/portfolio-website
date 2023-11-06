import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../models/Project';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  featureProject = {} as Project;
  avatarUrl: string;
  bio: string;

  // TitleService sets the title of the site in each the browser tab
  constructor(private titleService: Title, private projectService: ProjectsService,private homeService: HomeService) {
    this.titleService.setTitle('Danny Clynes - Home');
  }
  ngOnInit(): void {
    this.featureProject = this.projectService.GetProjectById(0);
    // had to set 'strict: false' in tsconfig.json to get access to data['some key']
    this.homeService.GetGitHubResponse().subscribe((data)=>{
      console.log(data);
      this.avatarUrl = data['avatar_url'];
      this.bio = data['bio']
    });
  }

  
}
