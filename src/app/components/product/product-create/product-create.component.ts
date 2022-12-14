import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 125.98
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  

    
  }

  createProduct(): void {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
    this.productService.create(this.product).subscribe(() => {
      
    })

    
      
    }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
