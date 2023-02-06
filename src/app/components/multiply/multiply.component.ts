import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  tittle: string = 'Calculadora Multiplicar';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  multiply():void{
    this.resultado = this.numero1 * this.numero2;
  }

}
