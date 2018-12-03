import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ]
})
export class AppComponent {
  title = 'NII Diagnostic Tool';
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  confirm(): void {
    //this.message = 'Confirmed!';
    console.log('Confirmed');
    this.modalRef.hide();
  }
  decline(): void {
    //this.message = 'Declined!';
    this.modalRef.hide();
  }
}
