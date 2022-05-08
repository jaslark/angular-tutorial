import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-comp',
  templateUrl: './c-comp.component.html',
  styleUrls: ['./c-comp.component.scss']
})
export class CCompComponent implements OnInit {
  @Input() value: number;
  number = 0;

  constructor(private _cdr: ChangeDetectorRef) {
    setTimeout(() => {
      // this._cdr.detach();
      this.number = this.value;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
