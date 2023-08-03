import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

// ? SERVICES
import { UserService } from "../../services/user.service";

// ? MODELS
import { User } from "../../models/user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [UserService]
})

export class AuthComponent implements OnInit{
  public component: string = 'AuthComponent';
  public user: User;
  public userLogin: User;
  public response: any;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.user = new User('', '', '', '', '', '', 'male', '');
    this.userLogin = new User('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    // Se ejecuta siempre que se llame el componente y cierra sessi'on cuando le llega el parametro sure por la URL
    this.logout();
  }

  onSubmitRegister(form: any) {
    this._userService.register(this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any> error);
      }
    );

  }

  onSubmitLogin(form: any) {
    this.response = null;
    this.spinner.show();
    this._userService.login(this.userLogin).subscribe(
      response => {
        if (response.status === 'success') {
            localStorage.setItem('token', response.token);
            localStorage.setItem('identity', JSON.stringify(response.user));

            // Redireccion a inicio
            this._router.navigate(['']);
        }
      },
      error => {
        console.log(<any>error);
        this.response = error.error;
        console.log(this.response);
        
        this.spinner.hide();
      }
    );
  }

  logout() {    
    this._route.params.subscribe(params => {
      let logout = +params['sure']; // El + del inicio convierte el string en numero 

      if (logout == 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        // Redireccion a inicio
        this._router.navigate(['auth']);
      }
    });
  }
}
