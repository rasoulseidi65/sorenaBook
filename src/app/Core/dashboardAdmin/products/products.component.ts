import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {ProductAddDialogComponent} from './product-add-dialog/product-add-dialog.component';
import {AdminServiceService} from '../admin-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [
    MessageService, DialogService, ConfirmationService
  ]
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private messageService: MessageService,
              private service: AdminServiceService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
  }
  showAddProductDialog(): void {
    const ref = this.dialogService.open(ProductAddDialogComponent, {
      header: 'ثبت محصول',
      width: '80%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        // this.getProducts();
      }
    });
  }
}
