import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Product } from '../product/product';
import { ProductCategory } from '../product-category/product-category';

@Injectable()
export class ProductCategoryService {

  constructor(private http:Http) { }
  category_url:string="http://180.149.245.182:3008/api/categories"

	getPopularCategories(): Observable<ProductCategory>{
    return this.http.get(this.category_url + '?filter={"order": "product_avg_rating  DESC","include":"images" ,"limit":"6", "skip":"0"}').map((response: Response) => {
      return <ProductCategory>response.json()
    }).catch(this.handleError)
  }
    handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
