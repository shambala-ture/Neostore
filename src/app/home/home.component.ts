import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from '../product/product';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ProductCategory } from '../product-category/product-category';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product
  productCategories: ProductCategory
  constructor(private homeService:HomeService, private productCategory:ProductCategoryService) {
  }
  ngOnInit() {
		this.getPopularProducts();
		this.getPopularCategories();
  }
  getPopularProducts() {
    this.homeService.getPopularProducts().subscribe(
      (response: Product) => {
        this.products = response
        console.log(response);
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }
  getPopularCategories() {
    this.productCategory.getPopularCategories().subscribe(
      (response: ProductCategory) => {
        this.productCategories = response
        console.log(response);
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }

}
