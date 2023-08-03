import { Component, EventEmitter, Input, Output } from '@angular/core';
import { global } from '../../services/global';

@Component({
  selector: 'app-banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.css']
})
export class BannersListComponent {

  @Input() public banners: any;
  @Output()  public onSelectBanner: EventEmitter<any> = new EventEmitter();

  public url: string;
  public selectedBanner: any;
  public btnNext: any;

  constructor () {
    this.url = global.url;
    
    
  }
  
  selectBanner( banner: any ) {
    this.onSelectBanner.emit( banner );
  }
  
}
