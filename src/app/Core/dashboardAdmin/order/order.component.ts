import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from '../admin-service.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {UserOrdersComponent} from './user-orders/user-orders.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class OrderComponent implements OnInit {
  orders: any = [];

  constructor(private service: AdminServiceService,
              private messageService: MessageService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getOrderAll();
  }

  getOrderAll() {
    this.service.getAllOrders().subscribe((response) => {
      if (response['success'] === true) {
        this.orders = response['data'];
      }
    });
  }
  showUserInfo(user:any){
    const ref = this.dialogService.open(UserOrdersComponent, {
      data: {
       user
      },
      header: ' مشخصات مشتری',
      width: '70%',
    });
  }
}
