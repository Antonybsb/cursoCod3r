import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
