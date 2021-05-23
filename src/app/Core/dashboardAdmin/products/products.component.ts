import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {ProductAddDialogComponent} from './product-add-dialog/product-add-dialog.component';
import {AdminServiceService} from '../admin-service.service';
import {ProductEditDialogComponent} from './product-edit-dialog/product-edit-dialog.component';

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
    this.getAllProduct();
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
  getAllProduct(){
    this.service.getAllProducts().subscribe((response)=>{
      if(response['success']===true){
        this.products=response['data'];
        console.log(this.products)
      }
    })
  }

    deleteProduct(id: any): void {
      this.confirmationService.confirm({
        message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
        header: 'تایید حذف',
        icon: 'pi pi-exclamation-triangle',
        rejectLabel: 'خیر',
        acceptLabel: 'بله',
        defaultFocus: 'reject',
        accept: () => {
          // delete from db
          this.service.deleteProduct(id).subscribe((response) => {
            if (response.success === true) {
              this.confirmationService.close();
              this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
              this.getAllProduct();
            } else {
              this.messageService.add({severity: 'error', summary: ' حذف اطلاعات ', detail: response.data});
            }
          });
        },
        reject: () => {
          // close
          this.confirmationService.close();
        }
      });
    }
  showEditProductDialog(id: string): void {
    let product = this.products.filter(x => x._id == id)[0];

    const ref = this.dialogService.open(ProductEditDialogComponent, {
      data: {
        product
      },
      header: 'ویرایش محصول',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getAllProduct();
      }
    });
  }


}
