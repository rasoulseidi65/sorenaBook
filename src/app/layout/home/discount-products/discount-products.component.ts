import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-discount-products',
  templateUrl: './discount-products.component.html',
  styleUrls: ['./discount-products.component.scss']
})
export class DiscountProductsComponent implements OnInit {
  customOptions: OwlOptions = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    // navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items:4
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
