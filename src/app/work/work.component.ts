import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  work1: string = "MAX Technical Training";
  work2: string = "The Iron Yard";

  constructor() { }

  ngOnInit(): void {
  }

}
