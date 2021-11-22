import { Component, VERSION } from '@angular/core';

export class AppComponent {
  @Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  })
  name: string = 'Angular ' + VERSION.major;
}
