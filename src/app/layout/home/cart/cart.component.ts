import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
    this.refreshCart();
  }

  deleteCart(item: any) {
    this.cart.deleteItem(item);
    this.items = this.cart.getItems();
    this.refreshCart();
    this.getInfoUser();
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
        this.sumPrice += (Number(this.items[i]['cartList'].price) - pricePercent);

      } else {
        this.sumPrice += this.items[i]['cartList'].price;
      }
      //
      //     }
      //   }
      // });


    }
    // this.sumPrice = sumPrice;

  }

  getInfoUser() {
    if ((this.localstorage.getCurrentUser() === true) && (this.localstorage.userType === 'user')) {
      const userInfologin = this.localstorage.userJson;
      this.service.getUserInfo(this.localstorage.userJson['_id']).subscribe((response) => {
        if (response['success'] === true) {
          this.localstorage.saveCurrentUser(JSON.stringify(response['data']));
          this.userInfo.id = userInfologin['_id'];
          this.userInfo.firstName = userInfologin['firstName'];
          this.userInfo.lastName = userInfologin['lastName'];
          this.userInfo.state = userInfologin['state'];
          this.userInfo.city = userInfologin['city'];
          this.userInfo.mobile = userInfologin['mobile'];
          this.userInfo.phone = userInfologin['phone'];
          this.userInfo.address = userInfologin['address'];
          this.userInfo.postalCode = userInfologin['postalCode'];
        }
      });
    }
  }

  addCart(item: any, count: any) {
    let data = {
      _id: item['cartList']._id
    };
    this.service.getProducts(data).subscribe((response) => {
      if (response.success === true) {
        let Inventory = response['data'][0]['Inventory'][0];
        if (Number(count.value) <= Number(Inventory.count)) {
          this.cart.addToCart(item, count);
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
