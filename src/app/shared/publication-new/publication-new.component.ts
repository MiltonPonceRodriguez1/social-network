import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from "../../services/user.service";
import { PublicationService } from "../../services/publication.service";
import { global } from "../../services/global";
import { Publication } from "../../interfaces/publication.interface";

@Component({
  selector: 'app-publication-new',
  templateUrl: './publication-new.component.html',
  styleUrls: ['./publication-new.component.css'],
  providers: [UserService, PublicationService]
})
export class PublicationNewComponent implements DoCheck {
  public url: string;
  public identity: any;
  public token: string;
  public publication: Publication;

  @Output()
  public onNewPublication: EventEmitter<Publication> = new EventEmitter();

  constructor(
    private _userService: UserService,
    private _publicationService: PublicationService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    this.publication = {
      user_id: this.identity.id,
      text: "",
      file: null
    };
  }
  
  ngDoCheck(): void {
    this.loadIdentity();
  }
  
  onChange(event: any) {
    this.publication.file = event.target.files[0];
  }

  loadIdentity(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  onSubmit(form: NgForm): void {
    let modal = document.getElementById('publication-modal');
    // console.log(this.publication);

    this._publicationService.store(this.token, this.publication).subscribe(
      response => {
        if (response.status === 'success') {
          this.onNewPublication.emit(response.publication);
          modal?.click();
          this.publication.text = "";
          this.publication.file = null;
        } else {
          console.log('@ERROR');
          modal?.click();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  
}
