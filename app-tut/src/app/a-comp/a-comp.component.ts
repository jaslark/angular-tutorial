import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-comp',
  templateUrl: './a-comp.component.html',
  styleUrls: ['./a-comp.component.scss']
})
export class ACompComponent implements OnInit {

  value = 10;
  arr = ['a'];

  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.value = 20;  => Tree Component A, B, C show different value

    // setTimeout(() => {
    //   this.value = 20;
    // }, 0);  => next turn after init

    // this.value = 30;
    // this._cdr.detectChanges(); // check from current component to child


    //reattach() => reattach current component


    //markForCheck() => check for all parent components up to root component

    //ngZone support update state, remove same state in React


    // this.arr.push('b');
    // this.arr = [...this.arr, 'b']; => change reference address
  }

}
