import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  private userType;
  constructor(private localstorage: LocalStorageService,
              private router: Router) {
    this.localstorage.getCurrentUser();

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (this.localstorage.getCurrentUser() ) {
      this.userType = 'user';
      if (this.userType === 'user') {
        return true;
      } else {
        this.router.navigate(['auth/register']);
        return false;
      }

    // }
  }

}
