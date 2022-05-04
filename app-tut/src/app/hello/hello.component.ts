import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked
{
  @Input() text: string = '';
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    console.log('Child OnInit ran');
    this._dataService.setTextFromHello(this.text);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child OnChanges ran', { changes });
  }
  ngOnDestroy(): void {
    console.log('Child OnDestroy ran');
  }
  ngAfterViewInit(): void {
    console.log('Child AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    console.log('Child AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    console.log('Child AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked ran');
  }


  onButtonClicked() {
    this.text = 'Changed from Hello Component';
    this.buttonClicked.emit(this.text);
    this._dataService.setTextFromHello(this.text);
  }
}
