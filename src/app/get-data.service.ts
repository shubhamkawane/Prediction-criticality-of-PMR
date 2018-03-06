import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetDataService{

    constructor(private http: Http) {
    }

    getOrderSummary(): Observable<any> {
      return this.http.get('./assets/data/api/PMR-Data.json')
      .map((response: Response) => {
        return response.json();
    }
    )
    
}


      
  } 
