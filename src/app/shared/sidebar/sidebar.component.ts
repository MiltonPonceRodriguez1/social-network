import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { global } from "../../services/global";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public url: string;
  public identity: any;
  public token: string = '';

  constructor(
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
