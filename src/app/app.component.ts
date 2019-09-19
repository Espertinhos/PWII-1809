import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  foto = 'favicon.ico';
  Peso = '75';
  Altura = '1.80';

  exibir(){
      alert(this.title)
  }
  mostrar(Peso,Altura){
    let CalculadoImc =  Peso / (Altura * Altura ); 
     alert(CalculadoImc)
  }
}
