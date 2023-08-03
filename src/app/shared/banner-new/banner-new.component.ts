import { Component, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

import { BannerService } from '../../services/banner.service';
import { UserService } from '../../services/user.service';
import { Banner } from 'src/app/interfaces/banner.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-new',
  templateUrl: './banner-new.component.html',
  styleUrls: ['./banner-new.component.css'],
  providers: [ UserService, BannerService ],
})

export class BannerNewComponent implements OnChanges {
  @Input() public plan: any;
  public identity: any;
  public token: string;
  public banner: Banner;
  public status: string | undefined;
  public message: string | undefined;

  constructor (
    private _userService: UserService,
    private _bannerService: BannerService,
    private _router: Router
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.status = undefined;
    this.message = undefined;
    this.banner = {
      id: null,
      user_id: this.identity.id,
      banner_plan_id: this.plan,
      company: '',
      phone: '',
      email: '',
      website: '',
      banner: null,
      active: false,
      limit_date: null,
      created_at: '',
      updated_at: '',
    };

  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes['plan'] && changes['plan'].currentValue) {
      this.banner.banner_plan_id = changes['plan'].currentValue;
    }
  }
  
  onChange( event: any ) {
    this.banner.banner = event.target.files[0];
  }

  onSubmitBanner( form: any ) {
    let btnModal = document.getElementById('banner-new-modal');
    this.status = undefined;
    this.message = undefined;
    
    this._bannerService.store( this.token, this.banner ).subscribe(
      response => {
        console.log(response);
        if ( response.status === 'success' ) {
          this.status = response.status;
          this.message = response.message;
          setTimeout( () => {
            btnModal?.click()
            this._router.navigate(['']);
          }, 2000);
        }
      },
      error => {
        console.log(<any> error);
      }
    );
    
  }
}
