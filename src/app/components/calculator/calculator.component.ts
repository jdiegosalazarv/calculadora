import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  tittle: string = 'Calculadora Sumar';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }

  alumnos = {
    johan: "java",
    juan: "javaScript"
  }

}
