import {Injectable, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ItemCart} from './itemCart';

let itemsInCart = [];
let cart = [];
let subject = new Subject<any>();

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ItemCart;

  constructor() {
    // localStorage.removeItem('cartList');
  }

  addToCart(Product: any) {
    let local_Storage;
    let itemsInCart = [];
    this.items = {
      cartList: Product,
    };
    if (localStorage.getItem('cartList') === null) {
      // @ts-ignore
      itemsInCart.push(this.items);
      localStorage.setItem('cartList', JSON.stringify(itemsInCart));
      subject.next('changed');
    } else {
      local_Storage = JSON.parse(localStorage.getItem('cartList')!);

      for (var i in local_Storage) {
        if (Product['_id'] === local_Storage[i]['cartList']['_id']) {
          let index = parseInt(i);
          local_Storage.splice(index, 1);
          localStorage.setItem('cartList', JSON.stringify(local_Storage));
          break;
        }
      }
    }
    if (this.items) {
      // @ts-ignore
      itemsInCart.push(this.items);
    }
    // tslint:disable-next-line:only-arrow-functions
    local_Storage.forEach(function(item) {
      // @ts-ignore
      return itemsInCart.push(item);
    });
    localStorage.setItem('cartList', JSON.stringify(itemsInCart));
    subject.next('changed');

  }

  deleteItem(item) {
    let shopping_cart;
    let index;
    shopping_cart = JSON.parse(localStorage.getItem('cartList')!);
    for (let i in shopping_cart) {
      if (item['cartList']._id === shopping_cart[i]['cartList']._id) {
        index = i;
      }
    }
    shopping_cart.splice(index, 1);
    localStorage.setItem('cartList', JSON.stringify(shopping_cart));

  }

  getItems() {
    return this.items = JSON.parse(localStorage.getItem('cartList')!);

  }
}
