import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {
  
  schools: string[] =  [
    "Mt. St. Mary Seminary",
    "University of Cincinnati",
    "St. Xavier HS"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
