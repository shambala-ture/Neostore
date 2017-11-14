import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductCategory } from '../product-category/product-category';
import { Color } from './color';
import { ProductService } from './product.service';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ColorService } from './color.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product;
  productCategories: ProductCategory;
  colors: Color;

  constructor(private productService:ProductService, private productCategory:ProductCategoryService, private colorService:ColorService) { }
  ngOnInit() {
  	this.getPopularCategories();
  	this.getProducts();
  	this.getColors();
  }
  getColors() {
    this.colorService.getColors().subscribe(
      (response: Color) => {
        this.colors = response
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
	getProducts() {
	  this.productService.getProducts().subscribe(
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

}
