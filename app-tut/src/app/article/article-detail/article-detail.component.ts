import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { map, Observable } from 'rxjs';
import { Article } from '../../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;
  constructor(private _route: ActivatedRoute, private _api: ArticleService) {}

  ngOnInit(): void {
    let slug = '';
    this._route.paramMap.subscribe(params => {
      slug = params.get('slug') || '';
      this._api.getArticleBySlug(slug).subscribe(
        data => {
          this.article = data;
        }
      );
    })



  }
}
