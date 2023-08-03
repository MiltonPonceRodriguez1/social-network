import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { BannerPlanService } from '../../services/banner-plan.service';
import { BannerPlan } from 'src/app/interfaces/banner-plan.interface';

@Component({
  selector: 'app-banner-plans',
  templateUrl: './banner-plans.component.html',
  styleUrls: ['./banner-plans.component.css'],
  providers: [BannerPlanService],
})
export class BannerPlansComponent implements OnInit {
  public plans: Array<BannerPlan> = [];
  public selectedPlan: any;

  constructor(
    private _bannerPlanService: BannerPlanService,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this._bannerPlanService.index().subscribe(
      response => {
        this.plans = response.plans;
        this.spinner.hide();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubscribe( id: number ) {
    // console.log(`SUSCRIPCIÓN AL PLAN CON ID ${ this.selectedPlan }`);
    this.selectedPlan = id;
    
  }


}
