import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private userType;
  private isLogin: boolean = false;

  constructor(private localstorage: LocalStorageService,
              private router: Router) {
    this.isLogin = this.localstorage.getCurrentUser();
    this.userType = this.localstorage.userJson['type'];
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.localstorage.getCurrentUser();
    this.userType = this.localstorage.userJson['type'];
      if (this.userType === 'admin') {
        return true;
      } else {
        this.router.navigate(['/auth/loginAdmin']);
        return false;
      }

    }
  // }

}
