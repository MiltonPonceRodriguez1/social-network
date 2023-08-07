import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { UserService } from '../../services/user.service';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnChanges {
  @Input() public plan: number = 0;
  public identity: any;
  public token: string;
  public post: Post;

  constructor (
    private _userService: UserService,
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
  }

  onSubmit( form: any ): void {
    console.log(this.post);
  }
}
