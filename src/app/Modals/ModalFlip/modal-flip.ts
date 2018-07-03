import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MaintenanceComponent } from '../../maintenance/maintenance.component'


@Component({
  selector: 'ngbd-modal-flip',
  templateUrl: './modal-flip.html',
  styleUrls: ['./modal-flip.css']
})
export class NgbdModalFlip {
  closeResult: string;
  flipValue: string;
  alert: string;

  constructor(private modalService: NgbModal) {
    this.flipValue = 'Flip Horizontal';
    this.alert = 'Flip Horizontal is ON';
  }

  openFlip(content) {
    this.flip();
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  flip(): void {
    
    if (this.flipValue === 'Flip Horizontal') {
      this.flipValue = 'Flip Vertical';
      this.alert = 'Flip Vertical is ON';
    }
    else if (this.flipValue === 'Flip Vertical') {
      this.flipValue = 'Flip Horizontal';
      this.alert = 'Flip Horizontal is ON';
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
