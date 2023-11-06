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
    projectLink: '',
    tags: [Tag.SPRING, Tag.JAVA, Tag.POSTGRESQL],
    pictures: []
  },
  {
    id: 1,
    name: 'Coffee and WiFi',
    summary: 'Flask website where users can post Cafes with details',
    description: '',
    projectLink: '',
    tags: [Tag.PYTHON, Tag.FLASK],
    pictures: []
  },
  {
    id: 2,
    name: 'Breakout',
    summary: 'Classic Wozniak arcade game built with Python\'s TKInter GUI library',
    description: '',
    projectLink: '',
    tags: [Tag.PYTHON],
    pictures: []
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
