import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CartService} from '../../../serviceCart/cart.service';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  items: any[];
  constructor(private _formBuilder: FormBuilder,
              private cart:CartService,
              private localstorage:LocalStorageService) {
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
  }
  deleteCart(item: any) {
    this.cart.deleteItem(item);
    this.items = this.cart.getItems();
    // this.refreshCart();
  }
  // getInfoUser() {
  //   if (this.localstorage.getCurrentUser() === true && this.localstorage.userType==='user') {
  //     this.successLogin = false;
  //     this.userInfologin = this.localStorage.userJson;
  //     let data = {
  //       mobile: this.userInfologin['mobile']
  //     };
  //     this.authService.onfindUser(data).subscribe((response) => {
  //       if (response['success'] === true) {
  //         this.localStorage.saveCurrentUser(JSON.stringify(response['data']));
  //         this.userInfologin = this.localStorage.userJson;
  //         this.userInfo.id = this.userInfologin['_id'];
  //         this.userInfo.firstName = this.userInfologin['firstName'];
  //         this.userInfo.lastName = this.userInfologin['lastName'];
  //         this.userInfo.state = this.userInfologin['state'];
  //         this.userInfo.city = this.userInfologin['city'];
  //         this.userInfo.mobile = this.userInfologin['mobile'];
  //         this.userInfo.phone = this.userInfologin['phone'];
  //         this.userInfo.address = this.userInfologin['address'];
  //         this.userInfo.postalCode = this.userInfologin['postalCode'];
  //       }
  //     });
  //   }
  // }
}
