import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  foto = 'favicon.ico';

  exibir(){
      alert(this.title)
  }
}
