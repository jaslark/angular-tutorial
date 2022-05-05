import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { Article } from '../article';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this._api.getArticles().subscribe(
      data => {
        this.articles = data;
      }
    );
  }
}
