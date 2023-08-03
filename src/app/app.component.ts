import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-networking';
  show: boolean;

  onRouterOutletActivate(event : any) {
    if (event.component === 'AuthComponent' || event.component === 'ErrorComponent') {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  constructor() {
    this.show = false;
  }
}
