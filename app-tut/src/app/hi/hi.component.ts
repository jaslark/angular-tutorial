import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit {

  text: string = '';

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.text = this._dataService.textFromHello();
  }

}
