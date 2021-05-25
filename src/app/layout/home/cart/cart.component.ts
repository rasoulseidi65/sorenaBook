import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CartService} from '../../../serviceCart/cart.service';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';
import {LayoutServiceService} from '../../layout-service.service';
import {MatStepper} from '@angular/material/stepper';
import * as moment from 'jalali-moment';


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
  errorMessages = {
    fullName: [{type: 'required', message: 'نام و نام خانوادگی را وارد کنید.'}],
    nationalCode: [{type: 'required', message: 'کد ملی را وارد کنید.'}],
    mobile: [
      {type: 'required', message: 'شماره موبایل را وارد کنید.'},
      {type: 'minlength', message: 'شماره موبایل باید 11 رقم باشد.'},
      {type: 'maxlength', message: 'شماره موبایل باید 11 رقم باشد.'},
      {type: 'pattern', message: 'لطفا شماره موبایل معتبر وارد کنید.'}
    ],
    phone: [{type: 'required', message: 'شماره تلفن ثابت  را وارد کنید.'}],
    email: [{type: 'required', message: 'ایمیل را وارد کنید.'}],
    sendCode: [{type: 'required', message: 'کد ایمیل شده را وارد کنید.'}],
    country: [{type: 'required', message: 'کشور را وارد کنید.'}],
    city: [{type: 'required', message: 'شهر را وارد کنید.'}],
    state: [{type: 'required', message: 'استان را وارد کنید.'}],
    postalCode: [{type: 'required', message: 'کد پستی را وارد کنید.'}],
    address: [{type: 'required', message: 'آدرس را وارد کنید.'}],
    password: [
      {type: 'required', message: 'کلمه عبور را وارد کنید.'},
      {type: 'minlength', message: 'کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد.'},
      {type: 'pattern', message: 'کلمه عبور باید شامل حروف کوچک و بزرگ لاتین و اعداد و اشکال باشد..'}
    ],
    confirmPassword: [
      {type: 'required', message: 'کلمه عبور را تکرار  کنید.'},
      {type: 'minlength', message: 'تکرار کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد.'}],

  };

  valueIndex: number = 0;
  isLogin: boolean = true;
  public payment = {
    userID: '',
    mobile: '',
    price: '',
    date: '',
    time: '',
    statusProduct: ''
  };
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
    this.getInfoUser();
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
    this.isLogin = this.localstorage.getCurrentUser();
    if (this.isLogin) {
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
  onPayment() {
    this.localstorage.getCurrentUser();
    if (this.isLogin) {
      this.service.updateUser(this.localstorage.userJson['_id'], this.secondFormGroup.value).subscribe((result) => {
        if (result['success'] === true) {

          this.payment.userID = this.localstorage.userJson['_id'];
          this.payment.mobile = this.localstorage.userJson['mobile'];
          this.payment.date = moment(Date.now()).locale('fa').format('YYYY/M/D');
          this.payment.time = moment(Date.now()).locale('fa').format('HH:mm:ss');
          this.payment.price = this.sumPrice.toString();

          let data = {
            product: JSON.parse(localStorage.getItem('cartList')!),
            user: this.payment,
          };

          this.service.onPayment(data).subscribe((response) => {
            let url = response['data'];
            document.location.href = url;
          });
        } else {
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
