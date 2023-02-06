import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

  tittle: string = 'Calculadora Dividir';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  divide():void{
    if(this.numero2 == 0){
      this.resultado = 0;
      alert("El numerador no puede ser igual a 0 en la división");
    }else{
      this.resultado = this.numero1/this.numero2;
    }
   
  }

}
