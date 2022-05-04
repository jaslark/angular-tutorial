import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _textFromHello: string = '';

  constructor() { }

 textFromHello(): string {
    return this._textFromHello;
  }

  setTextFromHello(text: string) {
    this._textFromHello = text;
  }
}
