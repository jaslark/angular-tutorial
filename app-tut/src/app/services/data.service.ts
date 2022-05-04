import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _textFromHelloSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  textFromHello$ = this._textFromHelloSubject.asObservable();

  constructor() { }

  setTextFromHello(text: string) {
    this._textFromHelloSubject.next(text);
  }
}
