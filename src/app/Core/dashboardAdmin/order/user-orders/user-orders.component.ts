import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  userInfo:any[]=[];
  constructor( public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.userInfo = this.config.data.user;

  }

}
