import { Component, OnInit } from '@angular/core';
import { Test } from '../../shared/models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testResult: Test;
  isSaved: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isSaved = false;
    this.testResult = new Test();
    this.testResult.testType = 2;
    this.testResult.result = 3;
  }

  saveTest() {
    console.log(this.testResult)
  }

}
