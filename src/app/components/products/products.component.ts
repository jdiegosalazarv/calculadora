import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [
      new Product('Camisa', 100, 'deportiva'), 
      new Product('Tenis', 150, 'Carreras'), 
      new Product('Gafas', 50, 'Oscuras'), 
      new Product('Pantalón', 250, 'Formal'), 
      new Product('Reloj', 80, 'Digital'), 
      new Product('Guantes', 30, 'Termicos'), 
      new Product('Medias', 20, 'Navidad'), 
      new Product('Pertfume', 90, 'flores'), 
      new Product('Short', 70, 'Jean'), 
      new Product('Falda', 100, 'deportiva'), 
    ]
   }

  ngOnInit(): void {
  }

}
