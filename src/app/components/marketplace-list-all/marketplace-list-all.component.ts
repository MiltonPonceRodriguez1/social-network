import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marketplace-list-all',
  templateUrl: './marketplace-list-all.component.html',
  styleUrls: ['./marketplace-list-all.component.css']
})
export class MarketplaceListAllComponent {
  @Input() public posts: any;
  public images: Array<number> = [ 1, 2, 3 ];
}
