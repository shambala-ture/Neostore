import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../product-detail/product-detail.service';
import {ActivatedRoute} from "@angular/router";
import { Product } from '../product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../../assets/css/product-details.css']
})
export class ProductDetailComponent implements OnInit {

	constructor(private route: ActivatedRoute, private productDetailService: ProductDetailService) {
	}
	product_detail: Product;
	procuctActiveImage: any;
  productDetailImgArray: any;
  rating: any;

  ngOnInit() {
    this.route.params.subscribe(params => this.getProductDetail(params['id']));
  }
  getProductDetail(product_id) {
    this.productDetailService.getProductDetail(product_id).subscribe(
      (response: Product) => {
        this.product_detail = response;
        this.productDetailImgArray= response.images;
        this.procuctActiveImage = this.productDetailImgArray[0].ImgURL;
        console.log(response);
        return response
      },
      (error :Error) => {
        return error
      }
    )
  }
  changeprocuctActiveImage(productActiveimage) {
    this.procuctActiveImage = productActiveimage.ImgURL;
  }
}
