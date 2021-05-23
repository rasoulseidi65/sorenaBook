import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {

  constructor(private http:HttpClient) { }
  //#region Products
  getAllProducts(): any {
    return this.http.get(
      'http://api.sorenabook.ir/api/v1/admin/products'
    );
  }
  getProducts(id:any): any {
    return this.http.get(
      'http://api.sorenabook.ir/api/v1/admin/products/'+id
    );
  }
}
