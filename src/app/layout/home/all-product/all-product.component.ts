import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {SearchService} from '../../../sharedComponents/search.service';
import {Options} from 'ts-node';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
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
    navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
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
        items: 5
      }
    }
  };
  products: any[] = [];
  items = [];
  displayNotProduct: boolean = false;
  pageOfItems: Array<any>;
  categories: any[] = [];
  displaySort = false;
  displaySortTop = true;
  displayFilter = false;
  valueDynamic = 500000;
  isLogged: boolean;
  highValueDynamic = 50000000;
  Products: any[];
  FilteredProducts: any[];
  product: any[];
  sortId = 1;
  displayBasic: boolean;
  countOfProduct = 7;
  priceList: number[] = [];
  resultSearch: boolean;
  offer = false;
  freeSend: any = false;
  constructor(public servicSearch: SearchService) { }

  ngOnInit(): void {
    if (this.servicSearch.resultSearchBox.length > 0) {
      this.resultSearch = true;
      this.Products = this.servicSearch.resultSearchBox;
      console.log(this.Products)
    }
  }

}
