import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayedColumns = ['pid', 'ptitle', 'owner', 'cs', 'ps'];
  dataSource = ELEMENT_DATA;


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

const ELEMENT_DATA: Element[] = [
  {pid: 172847, title: 'ISIM Rest API', owner: 'Divya Girase', current: 'High', predicted: 'Low'},
  {pid: 172482, title: 'ISIM OOM Failures', owner: 'Sachin Babar', current: 'High', predicted: 'Medium'},
  {pid: 172843, title: 'ISIM JAVA', owner: 'Kajal Doshi', current: 'High', predicted: 'Low'},
  {pid: 172422, title: 'ISIM C++', owner: 'Vinay Shet', current: 'High', predicted: 'Medium'},
  {pid: 172147, title: 'ISIM DBMs', owner: 'Shirish Agale', current: 'High', predicted: 'Low'},
  {pid: 172412, title: 'ISIM Registration', owner: 'Divya Girase', current: 'High', predicted: 'Medium'},
  {pid: 172847, title: 'ISIM Rest API', owner: 'Divya Girase', current: 'High', predicted: 'Low'},
  {pid: 172482, title: 'ISIM OOM Failures', owner: 'Sachin Babar', current: 'High', predicted: 'Medium'},
  {pid: 172843, title: 'ISIM JAVA', owner: 'Kajal Doshi', current: 'High', predicted: 'Low'},
  {pid: 172422, title: 'ISIM C++', owner: 'Vinay Shet', current: 'High', predicted: 'Medium'},
  {pid: 172147, title: 'ISIM DBMs', owner: 'Shirish Agale', current: 'High', predicted: 'Low'},
  {pid: 172412, title: 'ISIM Registration', owner: 'Divya Girase', current: 'High', predicted: 'Medium'},
];
