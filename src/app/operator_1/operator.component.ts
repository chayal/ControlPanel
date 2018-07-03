import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { OperatorService } from './operator.service';
import { Operator } from './operator';


//import { detailedItemComponent } from './../components/detailed-item/detailed-item.component';

//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  @Input() operator: Operator;
  constructor(
    private operatorService: OperatorService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {


  }
  goBack(): void {
    this.location.back();
  }
}
