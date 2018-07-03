import { Component, OnInit } from '@angular/core';
import { NgbdModalSymbolic } from '../Modals/ModalRemoveSymbolic/modal-symbolic'
import { NgbdModalFlip } from '../Modals/ModalFlip/modal-flip'
import { NgbdModalResetHC } from '../Modals/ModalResetHourCounter/modal-reset-hc'

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  someRange = [5, 10];
  addRemoveSymbol: string;
  alert: string;

  constructor() { }

  ngOnInit() {
    this.addRemoveSymbol = 'Remove Symbolic';
    this.alert = 'Symbolic added to PAL Channel';
    
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

}
