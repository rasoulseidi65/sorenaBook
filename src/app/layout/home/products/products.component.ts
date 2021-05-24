import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {LayoutServiceService} from '../../layout-service.service';
import {CartService} from '../../../serviceCart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
        items: 4
      }
    }
  };
   products:any[]=[];
  displayBasic:boolean;
  constructor(private service: LayoutServiceService,
              private cart: CartService) {
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.service.getAllProducts().subscribe((response)=>{
      if(response['success']===true){
        this.products=response['data'];
        console.log(this.products)
      }
    })
  }
  addCart(product: any): void {
    this.cart.addToCart(product,1);
    this.displayBasic = true;
  }
}
