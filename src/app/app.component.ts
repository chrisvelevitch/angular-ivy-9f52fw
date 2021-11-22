import { Component, Input, VERSION } from '@angular/core';

export class AppComponent {
  @Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  })
  @Input()
  name: string = 'Angular ' + VERSION.major;
}
