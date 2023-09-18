import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  constructor(private productService: ProductService){}

  getProducts(){
    this.productService.getProducts()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  


}
