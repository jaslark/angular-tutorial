import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked
{
  title = 'app-tut';

  textColor = 'tomato';
  withBorder = true;

  ngOnInit(): void {
    // console.log('OnInit ran');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanges ran', { changes });
  }
  ngOnDestroy(): void {
    // console.log('OnDestroy ran');
  }
  ngAfterViewInit(): void {
    // console.log('AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    // console.log('AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    // console.log('AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    // console.log('AfterContentChecked ran');
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
    this.title = 'Change title!';
  }

  onButtonClickedFromHello(event: string) {
    this.title = event;
  }
}
