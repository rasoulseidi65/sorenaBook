import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreuserService} from '../coreuser.service';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  formupdate: FormGroup;
userInfo={
  firstName:'',
  lastName:'',
  mobile:'',
  state:'',
  city:'',
  address:'',
  postalCode:'',
  cardNumber:''
};
  constructor(private fb: FormBuilder,
              private serviceupdate: CoreuserService,
              private localstorag: LocalStorageService,
              private message: MessageService) {
  }

  ngOnInit(): void {
    this.updateform();
    this.getuserinfo();
  }

  updateform() {
    this.formupdate = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required)
    });
  }
 getuserinfo(){
   if (this.localstorag.getCurrentUser() === true) {
     this.serviceupdate.getuser(this.localstorag.userJson['_id']).subscribe((res)=>{
       if(res['success']===true){
         this.userInfo.firstName=res['data'].firstName;
         this.userInfo.lastName=res['data'].lastName;
         this.userInfo.city=res['data'].city;
         this.userInfo.mobile=res['data'].mobile;
         this.userInfo.state=res['data'].state;
         this.userInfo.address=res['data'].address;
         this.userInfo.cardNumber=res['data'].cardNumber;
         this.userInfo.postalCode=res['data'].postalCode;
       }
     });
   }
 }
  onsubmit(id: any) {
    this.serviceupdate.updateuser(this.localstorag.userJson['_id'], this.formupdate.value).subscribe((result) => {
      if (result['success'] === true) {
        this.getuserinfo();
        this.message.add({severity: 'success', summary: 'کاربر گرامی  ', detail: 'اطلاعات شما بروزرسانی شد'});
      }
    });
  }
}
