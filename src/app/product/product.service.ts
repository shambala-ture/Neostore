import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Product } from './product';
import { ProductCategory } from '../product-category/product-category';

@Injectable()
export class ProductService {
	constructor(private http:Http) { }
  product_url:string="http://180.149.245.182:3008/api/products"

	getProducts(): Observable<Product>{
    return this.http.get(this.product_url + '?filter={"include":"images", "skip":"0"}').map((response: Response) => {
      return <Product>response.json()
    }).catch(this.handleError)
  }
  handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
