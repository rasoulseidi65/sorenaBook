import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreuserService} from '../coreuser.service';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
   formbuyuser: FormGroup;
   listbuyuser: any[];
  constructor(private fb: FormBuilder,
              private servicesuser: CoreuserService,
              private localstoreg: LocalStorageService) { }

  ngOnInit(): void {
    this.buyuserform();
    this.getbuyuser();
  }
 buyuserform(){
    this.formbuyuser = this.fb.group({
     img: new FormControl('' , Validators.required),
     title: new FormControl('' , Validators.required),
     teacher: new FormControl('' , Validators.required),
     price: new FormControl('' , Validators.required),
     date: new FormControl('' , Validators.required)
    });
 }
 getbuyuser(){
    this.servicesuser.buyusers(this.localstoreg.userJson['_id']).subscribe((result)=>{
      if (result['success'] === true){
        this.listbuyuser=result['data'];
      }
    });
 }
}
