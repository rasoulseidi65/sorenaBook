import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import * as moment from 'jalali-moment';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';
import {Router} from '@angular/router';
import {CoreuserService} from '../coreuser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isExpanded1 = true;
  showSubmenu1 = true;
  isShowing1 = false;

  isExpanded2 = true;
  showSubmenu2 = true;
  isShowing2 = false;

  isExpanded3 = true;
  showSubmenu3 = true;
  isShowing3 = false;

  isExpanded4 = true;
  showSubmenu4 = true;
  isShowing4 = false;

  isLogged = false;
  userType: string = '';
  adminName: string = '';

  public date = moment(Date.now()).locale('fa').format('YYYY/M/D');
  public time: any;
  firstName: string = '';
  lastName: string = '';

  constructor(
    public localStorage: LocalStorageService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private service: CoreuserService
  ) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = moment(Date.now()).locale('fa').format('HH:mm:ss');
    }, 1000);

    this.isLogged = this.localStorage.getCurrentUser();

   this.getuserinfo();
  }

  logOut(): void {
    this.localStorage.removeCurrentUser();
    this.router.navigateByUrl('/');
  }

  getuserinfo() {
    if (this.isLogged) {
      this.service.getuser(this.localStorage.userJson['_id']).subscribe((res) => {
        if (res['success'] === true) {
          this.firstName = res['data'].firstName;
          this.lastName = res['data'].lastName;

        }
      });
    }
  }
}
