import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { PaidPostService } from "../../services/paid-post.service";
import { global } from "../../services/global";

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [PaidPostService]
})
export class MarketplaceComponent implements OnInit{
  public url: string;
  public showCreateButton: boolean;

  public enterprisePosts : any;
  public businessPosts : any;
  public basicPosts : any;

  public posts: any;

  public testPosts: any;
  
  constructor(
    private spinner: NgxSpinnerService,
    private _paidPostService: PaidPostService
  ) {
    this.url = global.url;
    this.showCreateButton = false;
  }
  
  ngOnInit(): void {
    this.spinner.show();

    this._paidPostService.index().subscribe(
      response => {
        this.testPosts = response.paid_posts;

        console.log(this.testPosts);
        
        this.groupByPlan(response.paid_posts);      
        
        this.spinner.hide();
      },
      error => {
        console.log(<any>error);
        
      }
    )
    
  }

  groupByPlan(paid_posts: any): void { 
    this.posts = {};

    paid_posts.forEach( (x: any) => { 
      if( !this.posts.hasOwnProperty(x.user_plan.plan_id)){
        this.posts[x.user_plan.plan_id] = {
          posts: []
        }
      }
      
      if (x.images.length > 1) {
        this.posts[x.user_plan.plan_id].posts.push({
          title: x.title,
          images: x.images,
          category: x.category
        });
      } else {
        this.posts[x.user_plan.plan_id].posts.push({
          title: x.title,
          images: x.images[0],
          category: x.category
        });
      }
    });

    if(this.posts[1]) this.basicPosts = this.posts[1].posts;
    if(this.posts[2]) this.businessPosts = this.posts[2].posts;
    if(this.posts[3]) this.enterprisePosts = this.posts[3].posts;
  }

  onShowCreateButton(flag: boolean) {
    this.showCreateButton = flag;
  }

  onNewPaidPost(post: any) {
    console.log("@Market", post);

    console.log(this.posts[parseInt(post.user_plan.plan_id)]);
    this.posts[parseInt(post.user_plan.plan_id)].posts.unshift({
      title: post.title,
      images: post.images,
      category: post.category
    });
  }

}
