import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
    id: 0,
    name: 'Social Media API',
    summary: 'Spring Boot API modeling Twitter with 31 CRUD endpoints',
    description: '',
    projectLink: 'https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-09-2023-assessment-1-team-3',
    tags: [Tag.SPRING, Tag.JAVA, Tag.POSTGRESQL],
    pictures: ["../../assets/projects/social_media_api.png", "../../assets/projects/social_media_api_2.png"]
  },
  {
    id: 1,
    name: 'Coffee and WiFi',
    summary: 'Flask website where users can post cafes with details',
    description: '',
    projectLink: 'https://github.com/dannyc12/Portfolio_Coffee_WiFi_Website_SQL',
    tags: [Tag.PYTHON, Tag.FLASK],
    pictures: ["../../assets/projects/coffee_and_wifi_1.png", "../../assets/projects/coffee_and_wifi.png"]
  },
  {
    id: 2,
    name: 'Breakout',
    summary: 'Classic Wozniak arcade game built with Python\'s Turtle Graphics library',
    description: '',
    projectLink: 'https://github.com/dannyc12/Portfolio_Breakout_Game',
    tags: [Tag.PYTHON],
    pictures: ["../../assets/projects/breakout.png", "../../assets/projects/breakout_2.png"]
  }
];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

}
