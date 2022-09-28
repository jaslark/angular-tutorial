import {
  Component, ViewChild
} from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ViewChildComponent)
  childComponent!: ViewChildComponent;

  title = 'app-tut';

  textColor = 'tomato';
  withBorder = true;

  runChild() {
    this.childComponent.run();
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
    this.title = 'Change title!';
  }

  onButtonClickedFromHello(event: string) {
    this.title = event;
  }
}
