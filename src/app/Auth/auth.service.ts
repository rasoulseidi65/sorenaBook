import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(data: any): Observable<any> {
    return this.http.post('http://api.sorenabook.ir/api/v1/users/register', data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post('http://api.sorenabook.ir/api/v1/users/login', data);
  }

  resetPasswordUser(data: any) {
    return this.http.post('http://api.sorenabook.ir/api/v1/users/resetPassword', data);
  }

  changePasswordUser(id: any) {
    return this.http.get('http://api.sorenabook.ir/api/v1/users/changePassword/' + id);
  }

  getUser(id: any) {
    return this.http.get('http://api.sorenabook.ir/api/v1/users/index/' + id);
  }
}
