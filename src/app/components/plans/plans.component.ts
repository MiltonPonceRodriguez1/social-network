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
export class PlansComponent implements OnInit {
  public plans : any;
  public identity: any;
  public token: any;
  public response: any;
  public selectedPlan: number;

  constructor (
    private _planService: PlanService,
    private _userService: UserService,
    private spinner: NgxSpinnerService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.selectedPlan = 0;
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

  onSubscribe( id: number ) {
    this.selectedPlan = id;
  }
}
