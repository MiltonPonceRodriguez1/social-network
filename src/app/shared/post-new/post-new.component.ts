import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';

import { Post } from '../../interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css'],
  providers: [ UserService, PostService ],
})
export class PostNewComponent implements OnChanges {
  @Input() public plan: number = 0;
  public identity: any;
  public token: string;
  public post: Post;
  public response: any;

  constructor (
    private _userService: UserService,
    private _postService: PostService,
    private _router: Router,
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.post = {
      id: null,
      user_id: this.identity.id,
      plan_id: this.plan,
      title: '',
      category: 'technology',
      description: '',
      email: '',
      company: '',
      images: null,
      phone: '',
      active: false,
      limit_date: null,
      created_at: '',
      updated_at: '',
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['plan'] && changes['plan'].currentValue) {
      this.post.plan_id = changes['plan'].currentValue;
    }    
  }

  onChange(event: any) {
    this.post.images = Array.from(event.target.files);
    console.log(this.post.images);
        
  }

  onSubmit( form: any ): void {
    this.response = null;
    console.log(this.post);

    this._postService.store( this.token, this.post ).subscribe(
      response => {
        if ( response.status === 'success' ) {
          console.log(response);
          this.response = response;
          setTimeout(() => { this._router.navigate(['/marketplace']); }, 2500);
        }
        
      },
      error => {
        this.response = error.error;
        console.log(<any>error);
      }
    );
  }
}
