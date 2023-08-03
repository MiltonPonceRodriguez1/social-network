import { Component, OnInit, DoCheck, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from "../../services/user.service";
import { UserPlanService } from "../../services/user-plan.service";
import { PaidPostService } from "../../services/paid-post.service";

import { PaidPost } from "../../interfaces/paid-post.interface";

@Component({
  selector: 'app-paid-post-new',
  templateUrl: './paid-post-new.component.html',
  styleUrls: ['./paid-post-new.component.css'],
  providers: [UserService, UserPlanService, PaidPostService]
})
export class PaidPostNewComponent implements OnInit, DoCheck {
  public identity: any;
  public token: string;
  public post: PaidPost;
  public user_plans: any;
  public selected_plan: any;

  public status: boolean = false;
  public title: string = 'Error';
  public message: string = '';
  public bg: string = 'red';

  @Output()
  public onShowCreateButton: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public onNewPaidPost: EventEmitter<any> = new EventEmitter();


  constructor(
    private _userService: UserService,
    private _userPlanService: UserPlanService,
    private _paidPostService: PaidPostService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    this.post = {
      id: null,
      user_id: this.identity.id,
      user_plan_id: 0,
      title: '',
      description: null,
      category: 'technology',
      images: null
    };
  }

  ngDoCheck(): void {
    if (this.user_plans) {
      this.selected_plan = this.user_plans.find((element: any) => element.id == this.post.user_plan_id);
    }
  }

  ngOnInit(): void {
    this.getUserPlans();
  }

  onChange(event: any) {
    this.post.images = Array.from(event.target.files);    
  }

  
  getUserPlans(): void {
    let createButton = document.getElementById('post-paid-new');
    
    this._userPlanService.getByUser(this.identity.id).subscribe(
      response => {
        if (response.status === 'success') {
          this.user_plans = response.plans;
          
          if ( this.user_plans.length > 0 ) {
            this.post.user_plan_id = this.user_plans[0].id;
            this.onShowCreateButton.emit(true);

          } else {
            this.onShowCreateButton.emit(false);
          }

        }
      },
      error => {
        console.log(<any>error);
      }
      );
    }
    
    onSubmit( form: NgForm ): void {
      // console.log("@STATUS BEFORE", this.status);
      this.status = false;
      // console.log("@STATUS AFTER", this.status);
      
      
      if (this.selected_plan.post_count > 0) {
       
        if (this.verifyImages()) {
          this._paidPostService.store(this.token, this.post).subscribe(
            response => {
              if ( response.status === 'success' ) {
                this.selected_plan.post_count = response.user_plan.post_count;
                this.onNewPaidPost.emit(response.paid_post);
              }
              // console.log(response);

              this.status = true;
              this.message = "Post Publicado Correctamente!";
              this.bg = "green";
              this.title = "Success"
            },
            error => {
              console.log(<any>error);
            }
          );
        } else {
          this.status = true;
          this.message = "Su plan no respeta el número de imagenes permitidas";
        }        
      } else {
        this.status = true;
        this.message = "Usted ya no puede publicar más Posts con este plan";
      }
    }

    verifyImages(): boolean {
      if ((this.selected_plan.plan.name === 'Basic' || this.selected_plan.plan.name === 'Enterprise') && this.post.images?.length == 1) return true;
      if (this.selected_plan.plan.name === 'Business' && this.post.images != undefined && this.post.images?.length <= 3) return true;
      return false;
    }
}
