import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MaintenanceComponent } from '../../maintenance/maintenance.component'


@Component({
  selector: 'ngbd-modal-Symbolic',
  templateUrl: './modal-symbolic.html',
  styleUrls: ['./modal-symbolic.css']
})
export class NgbdModalSymbolic {
  closeResult: string;
  addRemoveSymbol: string;
  alert: string;

  constructor(private modalService: NgbModal) {
    this.addRemoveSymbol = 'Remove Symbolic';
    this.alert = 'Symbolic added to PAL Channel';
  }

  open(content) {
    this.addRemoveSimbols();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  addRemoveSimbols(): void {
    //open(content);
    if (this.addRemoveSymbol === 'Remove Symbolic') {
      this.addRemoveSymbol = 'Add Symbolic';
      this.alert = 'Symbolic Removed from PAL Channel';
    }
    else if (this.addRemoveSymbol === 'Add Symbolic') {
      this.addRemoveSymbol = 'Remove Symbolic';
      this.alert = 'Symbolic added to PAL Channel';
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
