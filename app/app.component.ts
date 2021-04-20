import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode: 'card' | 'list' = 'card';
  items = [
    { header: 'Header', content: 'content' }
  ];
  changeMode() {
    this.mode =  this.mode === 'card'
     ? 'list'
     : 'card';
  }
}
