import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CartService} from '../../../serviceCart/cart.service';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';
import {LayoutServiceService} from '../../layout-service.service';
import {MatStepper} from '@angular/material/stepper';

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
  sumPrice = 0;
  userInfo = {
    id: '',
    firstName: '',
    lastName: '',
    mobile: '',
    phone: '',
    state: '',
    city: '',
    postalCode: '',
    address: ''
  };
  valueIndex: number = 0;

  constructor(private _formBuilder: FormBuilder,
              private cart: CartService,
              private service: LayoutServiceService,
              private localstorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
    this.refreshCart();
  }

  deleteCart(item: any) {
    this.cart.deleteItem(item);
    this.items = this.cart.getItems();
    this.refreshCart();
  }

  refreshCart() {
    this.items = this.cart.getItems();
    this.sumPrice = 0;
    for (let i = 0; i < this.items.length; i++) {

      // this.countList='1';
      // let data = {
      //   _id: this.items[i]['product']['cartList']._id
      // };
      // this.servicelayout.findProductID(data).subscribe((response) => {
      //   if (response.success === true) {
      //     let Inventory = response['data'][0]['Inventory'][0];
      //     if (Inventory.count > 0) {
      //       this.valueCountProduct.push(this.items[i]['product'].number);
            if (this.items[i]['cartList'].offer === true) {
              let pricePercent: number = (this.items[i]['cartList'].price * this.items[i]['cartList'].offerPercent) / 100;
              this.sumPrice += (Number(this.items[i]['cartList'].price) - pricePercent) ;

            } else {
              this.sumPrice += this.items[i]['cartList'].price ;
            }
      //
      //     }
      //   }
      // });


    }
    // this.sumPrice = sumPrice;

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
  addCart(item: any, count: any) {
    let data = {
      _id: item['cartList']._id
    };
    this.service.getProducts(data).subscribe((response) => {
      if (response.success === true) {
        let Inventory = response['data'][0]['Inventory'][0];
        if (Number(count.value) <= Number(Inventory.count)) {
          this.cart.addToCart(item,count);
          // this.refreshCart();
        } else {
          alert('این تعداد موجود نمی باشد');
        }
      }
    });


  }

  nextSteper(steper: MatStepper) {

    this.valueIndex = steper.selectedIndex;
  }

  prevSteper(steper: MatStepper) {
    console.log(steper.selectedIndex);
    this.valueIndex = Number(steper.selectedIndex) - 1;
    console.log(this.valueIndex);
  }
}
