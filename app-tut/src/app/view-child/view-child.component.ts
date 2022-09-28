import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    //Maybe a bunch of logic here. And then we set a message. 
    console.log("Run Successfully!" );
  }

}
