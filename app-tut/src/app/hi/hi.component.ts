import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit, OnDestroy {

  text: string = '';
  subscription: Subscription;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this._dataService.textFromHello$.subscribe((text: string) => this.text = text);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
