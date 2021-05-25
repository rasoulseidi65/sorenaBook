import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login-register-user',
  templateUrl: './login-register-user.component.html',
  styleUrls: ['./login-register-user.component.scss'],
  providers: [MessageService]
})
export class LoginRegisterUserComponent implements OnInit {
     formlogin: FormGroup;
  constructor(private service: AuthService,
              private fb: FormBuilder,
              private servicestorg: LocalStorageService,
              private route: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.registerform();
  }
  registerform(){
    this.formlogin = this.fb.group({
      mobile: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  sublogin(data: string){
    this.service.loginUser(this.formlogin.value).subscribe((result) => {
      if (result ['success'] === true){
       this.servicestorg.saveCurrentUser(JSON.stringify(result ['data'] ));
        this.route.navigate(['user/panel']);
      }
      else {
        this.messageService.add({severity: 'error', summary: 'کاربر گرامی  ', detail: 'اطلاعات را درست وارد کنید'});
      }
    });
  }
}
