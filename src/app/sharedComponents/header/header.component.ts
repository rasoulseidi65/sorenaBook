import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import * as $ from 'jquery';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {CartService} from '../../serviceCart/cart.service';
import {LocalStorageService} from '../../Auth/localStorageLogin/local-storage.service';
import {SearchService} from '../search.service';
import {Post} from '../post';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  displayMobileMenu: boolean = false;
  itemsPc: MegaMenuItem[];
  isLogged: boolean = false;
  cartlist: any[] = [];
  lengthCartlist = 0;
  sumOfPrice = 0;
  countBadge = 0;
  showCartList:boolean = false;
  firstName:string='';
  lastName:string='';
  post: Post[];
  @ViewChild('basketDropDown') basketDropDown: ElementRef;
  @ViewChild('category') category: ElementRef;
  @ViewChild('navBar') navBar: ElementRef;
  constructor(private viewportScroller: ViewportScroller
    , private route: Router,
              private serviceCart: CartService,
              private localstorage: LocalStorageService,
              private dataService: SearchService) {


  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

    if (this.displayMobileMenu === true) {
      this.displayMobileMenu = false;
    }
  }

  ngOnInit(): void {
    this.isLogged = this.localstorage.getCurrentUser();
    if(this.isLogged){
      this.firstName=this.localstorage.userJson['firstName'];
      this.lastName=this.localstorage.userJson['lastName'];

    }
    setInterval(() => {
      this.getAllPrice();
    }, 1000);
    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: event => this.route.navigate(['/'])
      },
      {
        label: 'دسته بندی محصولات',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'کمک درسی',
            items: [
              {
                label: 'عمومی',
                icon: 'pi pi-fw pi-angle-left',
              },
              {
                label: 'تاریخی ',
                icon: 'pi pi-fw pi-angle-left',
              }
            ]
          },
          {
            label: 'دانشگاهی',
            items: [
              {
                label: 'برق ',
                icon: 'pi pi-fw pi-angle-left',
              },
              {
                label: 'کامپیوتر ',
                icon: 'pi pi-fw pi-angle-left',
              }
            ]
          },

        ]
      },
      {
        label: 'سوالات متداول',
        icon: 'pi pi-fw pi-question-circle',
        command: event => this.route.navigate(['/faq'])
      },

      {
        label: 'درباره ما',
        icon: 'pi pi-fw pi-info-circle',
        command: event => this.route.navigate(['/about'])
      },
      {
        label: 'تماس با ما',
        icon: 'pi pi-fw pi-phone',
        command: event => this.route.navigate(['/contact'])
      },
      {
        label: 'ورود/ثبت نام',
        icon: 'pi pi-fw pi-user',
        command: event => this.route.navigate(['/auth/register'])
      }
    ];
    this.itemsPc = [
      {
        label: 'صفحه اصلی', icon: 'pi pi-fw pi-home',
        command: event => this.route.navigate(['/']),
      },
      {

        label: 'دسته بندی محصولات', icon: 'pi pi-fw pi-list',
        items: [
          [
            {
              label: 'کمک درسی',
              items: [{label: 'ابتدایی '}, {label: 'دوره متوسطه '}]
            },
            {
              label: 'عمومی',
              items: [{label: 'دانشگاهی '}, {label: 'تاریخ '}]
            },
            {
              label: 'پزشکی',
              items: [{label: 'پرستاری '}, {label: 'پوست و مو  '}]
            }
          ],

        ],
        styleClass: 'product'
      },

      {
        label: 'درباره ما', icon: 'pi pi-fw pi-info-circle',
        command: event => this.route.navigate(['/about'])
      },
      {
        label: 'تماس ما', icon: 'pi pi-fw pi-phone',
        command: event => this.route.navigate(['/contact'])
      },

      {
        label:this.countBadge+'سبد خرید', icon: 'pi pi-fw pi-shopping-cart',
        command: event => this.route.navigate(['/gallery'])
      },
      {
        label: 'ورود و ثبت نام', icon: 'pi pi-fw pi-user',
        command: event => this.route.navigate(['auth/loginUser'])
      },
    ];
  }

  showMobileMenu(): void {
    this.displayMobileMenu = true;
  }
  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }
  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.post = this.dataService.filteredListOptions();
    else {
      this.post = this.dataService.postsData;
    }

  }
  getAllPrice(): void {
    // @ts-ignore
    this.cartlist = this.serviceCart.getItems();

    this.sumOfPrice = 0;
    this.countBadge = 0;
    this.showCartList = false;
    this.lengthCartlist = this.cartlist.length;
    if (this.cartlist != null) {
      if (this.cartlist.length > 0) {
        for (let i = 0; i < this.cartlist.length; i++) {
          this.countBadge++;
          this.sumOfPrice += Number(this.cartlist[i]['cartList'].price);
          this.showCartList = true;
        }
      }
    }

  }

  onDeleteCart(item: any): void {
    this.serviceCart.deleteItem(item);
    // @ts-ignore
    this.cartlist = this.serviceCart.getItems();
    this.getAllPrice();
  }

  goPageCart() {
    this.localstorage.getCurrentUser();
    if (this.localstorage.userJson != null) {
      this.route.navigate(['/cart']);
    } else {
      this.route.navigate(['/auth/login']);
    }
  }
  toggleBasketDropDown(): void {
    this.basketDropDown.nativeElement.classList.toggle('indicator-display');
    this.basketDropDown.nativeElement.classList.toggle('indicator-open');
  }

  openBasketDropDown(): void {

      this.basketDropDown.nativeElement.classList.add('indicator-display');
      this.basketDropDown.nativeElement.classList.add('indicator-open');

  }

  closeBasketDropDown(): void {
    this.basketDropDown.nativeElement.classList.remove('indicator-display');
    this.basketDropDown.nativeElement.classList.remove('indicator-open');
  }

  toggleNavBar(): void {
    this.navBar.nativeElement.classList.toggle('nav-row-open');
  }

  openNavBar(): void {

      this.navBar.nativeElement.classList.add('nav-row-open');

  }

  closeNavBar(): void {
    this.category.nativeElement.classList.remove('category-row-open');
    this.navBar.nativeElement.classList.remove('nav-row-open');
  }
  gotoCart(){
    if(this.isLogged && this.showCartList){
      this.route.navigate(['cart']);
    }
    else{
      this.route.navigate(['/auth/register']);
    }
  }
}
