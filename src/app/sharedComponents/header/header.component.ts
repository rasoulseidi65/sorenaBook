import {Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import {MegaMenuItem, MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  displayMobileMenu:boolean = false;
  itemsPc: MegaMenuItem[];

  constructor(private viewportScroller: ViewportScroller,private route: Router) {
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
                label: 'گان جراح',
                icon: 'pi pi-fw pi-angle-left',
              },
              {
                label: 'پک جراحی',
                icon: 'pi pi-fw pi-angle-left',
              }
            ]
          },
          {
            label: 'محصولات غیلر استری',
            items: [
              {
                label: 'گان جراحی',
                icon: 'pi pi-fw pi-angle-left',
              },
              {
                label: 'دست کش',
                icon: 'pi pi-fw pi-angle-left',
              }
            ]},
          {
            label: 'محصولات اختصاصی',
            items: [
              {
                label: 'پک ضد عفونی',
                icon: 'pi pi-fw pi-angle-left',
              },
              {
                label: 'ژل شوینده',
                icon: 'pi pi-fw pi-angle-left',
              }
            ]
          }
        ]
      },
      {
        label: 'سوالات متداول',
        icon: 'pi pi-fw pi-question-circle',
        command: event => this.route.navigate(['/faq'])
      },
      {
        label: 'گالری تصاویر',
        icon: 'pi pi-fw pi-images',
        command: event => this.route.navigate(['/gallery'])
      },
      {
        label: 'کاتالوگ',
        icon: 'pi pi-fw pi-file-pdf',
        command: event => this.route.navigate(['/'])
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
        styleClass:'product'
      },

      {
        label: 'درباره ما', icon: 'pi pi-fw pi-info-circle',
        command: event => this.route.navigate(['home/about'])
      },
      {
        label: 'تماس ما', icon: 'pi pi-fw pi-phone',
        command: event => this.route.navigate(['home/contact'])
      },

      {
        label: 'سبد خرید ', icon: 'pi pi-fw pi-shopping-cart',
        command: event => this.route.navigate(['/gallery'])
      },
      {
        label: 'ورود و ثبت نام', icon: 'pi pi-fw pi-user',
        command: event => this.route.navigate(['auth/loginUser'])
      },
    ];

  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

    if (this.displayMobileMenu === true){
      this.displayMobileMenu = false;
    }
  }

  ngOnInit(): void {
    // $(function() {
    //   $(document).scroll(function() {
    //     let nav = $('#menu-navbar');
    //     nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    //   });
    // });
  }

  showMobileMenu(): void {
    this.displayMobileMenu = true;
  }


}
