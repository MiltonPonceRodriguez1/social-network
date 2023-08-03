import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

import { UserService } from "../../services/user.service";
import { global } from "../../services/global";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  public url: string;
  public identity: any;
  public token: string;
  public user: any;
  public publications: any;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { 
    this.url = global.url;
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getProfile();  
  }

  getProfile() {
    // ? Obtener el ID del usuario desde la url
    this._route.params.subscribe(params => {
      let id = +params['id'];

      this._userService.profile(this.token, id).subscribe(
        response => {
          if (response.status === 'success' && response.user != null) {
            this.user = response.user;
            this.publications = response.publications;
            this.spinner.hide();
          } else {
            this._router.navigate(['']);
          }
        }, 
        error => {
          console.log(<any>error);
          this._router.navigate(['']);
        }
      );
    });
  }

  onNewAvatar( user: any ): void {
    this.user.avatar = user.avatar;
  }

  onNewCover( user: any ): void {
    this.user.cover = user.cover;
  }
}
