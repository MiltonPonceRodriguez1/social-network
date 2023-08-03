import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { PlanService } from "../../services/plan.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  providers: [PlanService, UserService]
})
export class PlansComponent implements OnInit{
  public plans : any;
  public identity: any;
  public token: any;
  public response: any;

  constructor (
    private _planService: PlanService,
    private _userService: UserService,
    private spinner: NgxSpinnerService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.spinner.show();
    this._planService.index().subscribe(
      response => {
        if (response.status === 'success') {
          this.plans = response.plans;
        }
        this.spinner.hide();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  subscribe(id: number) {
    this.response = null;

    let data = { plan_id: id, user_id: this.identity.id };

    this._planService.subscribe(this.token, data).subscribe(
      response => {
        console.log(response);
        if (response.status === 'success' || response.status === 'warning') {
            this.response = {
              status: response.status,
              message: response.message
            }
        }
        
      },
      error => {
        console.log(<any>error);
        if (error.error) {
          this.response = {
            status: error.error.status,
            message: error.error.message
          }
        }      
      }
    );
    
  }

}
