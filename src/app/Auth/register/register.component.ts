import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
   formregister: FormGroup;
  constructor(private fb: FormBuilder,
              private service: AuthService,
              private route: Router,
              private messageService: MessageService,
              private localstoreg: LocalStorageService) { }

  ngOnInit(): void {
    this.registerform();
  }
  registerform(){
    this.formregister = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }
  onsubmit(value: string){
    this.service.registerUser(this.formregister.value).subscribe((result) => {
      if (result['success'] === true){
        this.messageService.add({severity: 'success', summary: 'کاربر گرامی ', detail: 'ثبت نام شما با موفقیت انجام گرفت'});
        this.localstoreg.saveCurrentUser(JSON.stringify(result['data']));
        // this.route.navigate(['/']);
      }
    });
  }
}
