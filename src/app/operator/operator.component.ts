import { Component, OnInit } from '@angular/core';
import { NgbdModalBasic } from '../Modals/Modal/modal-basic'
//import { NgbdModalBIT } from '../Modals/ModalBIT/modal-bit'

import { OperatorService } from './operator.service';
import { JOperator } from './joperator.class';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent{
  title = 'app';
  someRange = [10];

  operators: JOperator[];
  bodyFilter: string;


  constructor(private operatorService: OperatorService) { }

  ngOnInit(): void {
    this.operatorService.getCommentsObservable().subscribe(
      value => {
        this.filterList();
      });
  }

  filterList(): void {
    if (this.bodyFilter == null || this.bodyFilter == "")
      this.operators = this.operatorService.getComments().slice(0, 10);
    else
      this.operators = this.operatorService.getComments().filter(comment => comment.body.indexOf(this.bodyFilter) > -1);
  }

  openLogs():void{
    window.open();
  }

}
