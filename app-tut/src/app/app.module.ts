import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTitlePipe } from './app-title.pipe';
import { IsAdultPipe } from './is-adult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppTitlePipe,
    IsAdultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
