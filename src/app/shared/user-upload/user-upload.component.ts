import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css'],
  providers: [UserService]
})
export class UserUploadComponent {
  public identity: any;
  public token: string;
  public avatar: any;
  public cover: any;

  @Output()
  public onNewAvatar: EventEmitter<any> = new EventEmitter();

  @Output()
  public onNewCover: EventEmitter<any> = new EventEmitter();

  constructor(
    private _userService: UserService,
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  onChange( event: any ) {
    this.avatar = event.target.files[0];   
  }

  onChangeCover( event: any ) {
    this.cover = event.target.files[0];
  }

  onSubmit(form: any) {    
    let modal = document.getElementById('avatar-modal');

    this._userService.upload(this.token, this.avatar, this.identity.id).subscribe(
      response => {
        if (response.status === 'success') {
          this.onNewAvatar.emit(response.user);
          localStorage.setItem('identity', JSON.stringify(response.user));
          setTimeout(() => {
            modal?.click();
          }, 150);
        }
      },
      error => {
        console.log(<any> error);
      }
    );
  }

  onSubmitCover(form: NgForm) {    
    let modal = document.getElementById('cover-modal');

    this._userService.upload(this.token, this.cover, this.identity.id, 'covers').subscribe(
      response => {
        if (response.status === 'success') {
          this.onNewCover.emit(response.user);
          setTimeout(() => {
            modal?.click();
          }, 150);
          this.cover = null;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
