import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


import { JOperator } from './joperator.class';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  operators: JOperator[];

  constructor(private http: Http) { }

  getCommentsObservable(): Observable<Response> {
    let obs = this.http.get("https://jsonplaceholder.typicode.com/comments");
    obs.subscribe(value => this.operators = value.json());
    return obs;
  }

  getComments(): JOperator[] {
    return this.operators;
  }
}
