import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-info-modal',
  templateUrl: './profile-info-modal.component.html',
  styleUrls: ['./profile-info-modal.component.css']
})
export class ProfileInfoModalComponent {

  onSubmit(): void {
    console.log("SUbir infor personal");
    
  }
}
