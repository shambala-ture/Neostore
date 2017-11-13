import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Product } from '../product/product';

@Injectable()
export class HomeService {

  constructor(private http:Http) { }
  product_url:string="http://180.149.245.182:3008/api/products"

	getPopularProducts(): Observable<Product>{
    return this.http.get(this.product_url + '?filter={"order": "product_avg_rating  DESC","include":"images" ,"limit":"6", "skip":"0"}').map((response: Response) => {
      return <Product>response.json()
    }).catch(this.handleError)
  }
    handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
