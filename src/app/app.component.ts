import { Component } from '@angular/core';
import { throttle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  input = '';
  binding = '0';

  agregarNumero(number: string){
  this.input = this.input + number;
  this.binding = this.input;
  }

  igual(){
    this.binding = eval(this.binding);
  }

  clear(){
    this.binding = '0';
    this.input = '';
  }

  clearAc(){
    this.binding = this.binding.slice(0, -1);
  }

}
