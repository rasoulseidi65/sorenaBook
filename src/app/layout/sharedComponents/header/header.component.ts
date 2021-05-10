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
  displayMobileMenu: boolean = false;
  itemsPc: MegaMenuItem[];

  constructor(private viewportScroller: ViewportScroller, private route: Router) {
    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: event => this.route.navigate(['/'])
      },

      {
        label: 'محصولات',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'محصولات استریل',
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
            label: 'محصولات غیر استریل',
            items: [
              {
                label: 'گان جراحی',
                icon: 'pi pi-fw pi-angle-left',
              },
              {
                label: 'دست کش',
                icon: 'pi pi-fw pi-angle-left',
              }
            ]
          },
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

        label: 'محصولات', icon: 'pi pi-fw pi-list',
        items: [
          [
            {
              label: 'محصولات استریل',
              items: [{label: 'گان جراح'}, {label: 'پک جراحی'}]
            },
            {
              label: 'محصولات غیر استریل',
              items: [{label: 'گان جراح'}, {label: 'پک جراحی'}]
            },
            {
              label: 'محصولات اختصاصی',
              items: [{label: 'دست کش'}, {label: 'پک ضد عفونی'}]
            }
          ],
          [
            {
              label: 'Video 3',
              items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
            },
            {
              label: 'Video 4',
              items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
            }
          ]
        ],
        styleClass: 'product'
      },
      {
        label: 'سوالات متداول', icon: 'pi pi-fw pi-question-circle',
        command: event => this.route.navigate(['/faq'])
      },
      {
        label: 'گالری تصاویر', icon: 'pi pi-fw pi-image',
        command: event => this.route.navigate(['/gallery'])
      },
      {
        label: 'درباره ما', icon: 'pi pi-fw pi-info-circle',
        command: event => this.route.navigate(['/about'])
      },
      {
        label: 'تماس ما', icon: 'pi pi-fw pi-phone',
        command: event => this.route.navigate(['./contact'])
      },
    ];

  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

    if (this.displayMobileMenu === true) {
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
