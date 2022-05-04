import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    console.log('Child OnInit ran');
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
}
