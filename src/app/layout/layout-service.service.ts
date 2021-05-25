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
  getUserInfo(id: any) {
    return this.http.get('http://api.sorenabook.ir/api/v1/users/index/' + id);
  }
  updateUser(id: any, data: any) {
    return this.http.put('http://api.sorenabook.ir/api/v1/users/updateUser/' + id, data);
  }
  onPayment(data: any): any {
    return this.http.post('http://api.sorenabook.ir/api/v1/users/payment', data);
  }
}
