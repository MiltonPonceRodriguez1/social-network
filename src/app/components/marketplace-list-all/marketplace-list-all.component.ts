import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { global } from '../../services/global';

@Component({
  selector: 'app-marketplace-list-all',
  templateUrl: './marketplace-list-all.component.html',
  styleUrls: ['./marketplace-list-all.component.css']
})
export class MarketplaceListAllComponent {
  @Input() public posts: Array<Post> = [];
  public url: string;
  public images: Array<number> = [ 1, 2, 3 ];

  constructor(

  ){
    this.url = global.url;
  }

}
