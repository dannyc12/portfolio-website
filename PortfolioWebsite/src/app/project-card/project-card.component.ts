import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

// make bsModalRef optional because the modals won't always be initialized
  bsModalRef?: BsModalRef;

  // BsModalService provided by ngx-bootstrap
  constructor(private modalService: BsModalService) {
    
  }

  OpenProjectModal() {

    const modalOptions: ModalOptions = {
      // css styling for our modals
      class: "modal-lg",
      initialState: {
        // takes the project input from the project card component and passes it on to the modal
        project: this.project
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
