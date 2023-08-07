import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { PostService } from '../../services/post.service';
import { global } from "../../services/global";
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ PostService ]
})
export class MarketplaceComponent implements OnInit{
  public url: string;
  public posts: Array<Post> = [];

  constructor(
    private spinner: NgxSpinnerService,
    private _postService: PostService,
  ) {
    this.url = global.url;
  }
  
  ngOnInit(): void {
    this.spinner.show();

    this._postService.index().subscribe(
      response => {
        if ( response.status === 'success' ) {
          this.posts = response.posts;
          // setTimeout(() => { this.spinner.hide() }, 2000);
          this.spinner.hide();
        }
      },
      error => {
        console.log(<any> error);
        setTimeout(() => { this.spinner.hide() }, 2000);
      }
    );
  }

}
