import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-comp',
  templateUrl: './b-comp.component.html',
  styleUrls: ['./b-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //  => OnPush(detach component)  when use it: No re-rendering Child Component,
  // just update when Change @Input Or DOM event
})
export class BCompComponent implements OnInit {

  @Input() value: number;
  @Input() arr: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
