import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Color } from './color';

@Injectable()
export class ColorService {

  constructor(private http:Http) { }
  color_url:string ='http://180.149.245.182:3008/api/colors'
  getColors(): Observable<Color>{
    return this.http.get(this.color_url).map((response: Response) => {
      return <Color>response.json()
    }).catch(this.handleError)
  }
    handleError(error: Response) { 
    return Observable.throw(error.json());
  }
}
