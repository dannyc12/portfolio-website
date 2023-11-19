import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isSkillsOpen: boolean = false;
  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;

  // This sets the title of the site in each the browser tab
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Danny Clynes - Resume');
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume SWE - Danny Clynes (2).pdf');
    // link.setAttribute('download', 'FastTrack - Danny Clynes version 3.docx.pdf');
    link.click();
    link.remove();
  }
}
