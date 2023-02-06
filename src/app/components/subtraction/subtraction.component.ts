import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  tittle: string = 'Calculadora Restar';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  restar():void{
    this.resultado = this.numero1 - this.numero2;
  }

}
