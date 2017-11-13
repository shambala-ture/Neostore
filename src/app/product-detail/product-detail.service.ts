import {ActivatedRoute} from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Product } from '../product/product';

@Injectable()
export class ProductDetailService {
	product_datail_url = "http://180.149.245.182:3008/api/products/"
  constructor(private http:Http) { }
  
  getProductDetail(product_id): Observable<Product>{
    return this.http.get(this.product_datail_url + product_id + '?filter={"include":"images"}').map((response: Response) => {
      return <Product>response.json()
    }).catch(this.handleError)
  }
    handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}