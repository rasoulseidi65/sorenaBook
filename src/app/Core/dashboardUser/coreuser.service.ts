import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreuserService {

  constructor(private http: HttpClient) {
  }

  updateuser(id: any, data: any) {

    return this.http.put('http://api.sorenabook.ir/api/v1/users/updateUser/' + id, data);
  }
  getuser(id: any) {
    return this.http.get('http://api.sorenabook.ir/api/v1/users/index/' + id);
  }
  buyusers(id: any){
    return this.http.get('http://api.sorenabook.ir/api/v1/users/myPurchases/' + id);
  }
}
