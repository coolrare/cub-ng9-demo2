import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

}
