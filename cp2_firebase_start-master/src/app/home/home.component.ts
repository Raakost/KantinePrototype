import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'cp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toolbarTitle = 'Healthy Studylife Cafe';

  constructor() {
  }

  ngOnInit() {
  }

}
