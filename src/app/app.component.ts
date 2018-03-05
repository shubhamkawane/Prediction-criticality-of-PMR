import { Component } from '@angular/core';
import {GetDataService} from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dataService:GetDataService){
        this.dataService.getOrderSummary().subscribe(res => {
        console.log(res);
        this.dataSource = res});
  }
  title = 'app';
  displayedColumns = ['pid', 'ptitle', 'owner', 'cs', 'ps'];
  dataSource:any =[]; 
  
  
  category = [
    { viewValue: 'PMR ID'},
    { viewValue: 'PMR TITLE'},
    { viewValue: 'OWNER'},
    { viewValue: 'CURRENT SEVERITY'},
    { viewValue: 'PREDICTED SEVERITY'}
  ];
  
}

export interface Element {
  title: string;
  pid: number;
  owner: string;
  current: string;
  predicted: string;

}


