import { Component, DoCheck } from '@angular/core';
import { UserService } from "../../services/user.service";
import { global } from "../../services/global";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements DoCheck{
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

  loadIdentity(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngDoCheck(): void {
    this.loadIdentity();
  }
  
}
