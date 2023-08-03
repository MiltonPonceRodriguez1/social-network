import { Component, Input } from '@angular/core';

import { global } from '../../services/global'

@Component({
  selector: 'app-banner-preview',
  templateUrl: './banner-preview.component.html',
  styleUrls: ['./banner-preview.component.css']
})
export class BannerPreviewComponent {
  @Input() public banner: any;
  public url: string;
  
  constructor() {
    this.url = global.url;
  }
  
  test(): void {
    console.log("BANNER CHILD", this.banner);
    
    
  }
}
