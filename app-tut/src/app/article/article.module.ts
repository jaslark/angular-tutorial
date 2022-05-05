import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleDetailComponent } from './article-detail/article-detail.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticleDetailComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
