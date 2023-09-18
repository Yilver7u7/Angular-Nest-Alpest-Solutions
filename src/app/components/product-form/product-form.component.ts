import { Component, OnInit} from '@angular/core';
import { Product } from "../../interfaces/Product";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  
  product:Product = {
    name: '',
    country: '',
    salary: 0,
    email: '',
    imageURL: '',
  };
  edit:boolean = false;
  
  constructor(
    private productService: ProductService,
    private router: Router
    ){}

  submitProduct() {
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(this.product);
    this.productService.createProduct(this.product)
    .subscribe(
      res => {
        console.log(this.product);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

}


