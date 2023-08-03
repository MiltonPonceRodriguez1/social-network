import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

// ? SERVICES
import { PublicationService } from "../../services/publication.service";
import { BannerService } from "../../services/banner.service";
import { UserService } from "../../services/user.service";
import { global } from "../../services/global";

// ? INTERFACES
import { Publication } from "../../interfaces/publication.interface";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [PublicationService, BannerService, UserService]
})
export class FeedComponent implements OnInit {
  public component: string = 'FeedComponent';
  public url: string;
  public identity: any;
  public publications: any;

  public banners: any;

  public bannersPerMonth: any;
  public bannersPerQuarter: any;
  public bannersPerHalfYear: any;

  public selectedBanner: any;

  constructor(
    private _publicationService: PublicationService,
    private _bannerService: BannerService,
    private _userService: UserService,
    private spinner: NgxSpinnerService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
    this.spinner.show();
    
    this._publicationService.index().subscribe(
      response => {
        if (response.status == 'success') {
          this.publications = response.publications;
          // console.log(this.publications);
          
        }
      }, 
      error => {
        console.log(<any>error);
      }
    );

    this._bannerService.index().subscribe(
      response => {
        if (response.status == 'success') {
          this.banners = response.month;

          this.bannersPerMonth = response.month;
          this.bannersPerQuarter = response.quarter;
          this.bannersPerHalfYear = response.halfYear;
          
          this.spinner.hide();
        }
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  onNewPublication(publication: Publication) {
    this.publications.unshift(publication);
  }

  onSelectBanner( banner: any ) {
    // console.log(banner);
    this.selectedBanner = banner;
  }
  

}
