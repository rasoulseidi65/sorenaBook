import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AdminServiceService} from '../admin-service.service';
import {DialogService} from 'primeng/dynamicdialog';
import {CategoryAddDialogComponent} from './category-add-dialog/category-add-dialog.component';
import {SubCategoryAddDialogComponent} from './sub-category-add-dialog/sub-category-add-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [
    MessageService, DialogService, ConfirmationService
  ]
})
export class CategoriesComponent implements OnInit {
  categories: any = [];

  constructor(private messageService: MessageService,
              private service: AdminServiceService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): any {
    this.service.getAllCategories().subscribe((res) => {
      if (res.success === true) {
        this.categories = res.data;
      }
    });
  }

  showAddCategoryDialog() {
    const ref = this.dialogService.open(CategoryAddDialogComponent, {
      header: 'ثبت عنوان دسته بندی',
      width: '50%'
    });
    ref.onClose.subscribe(res => {
      if (res === true) {
        this.getCategories();
      }
    });
  }
  showAddSubCategoryDialog(categoryID: string): void {
    const ref = this.dialogService.open(SubCategoryAddDialogComponent, {
      data: {
        categoryID,
      },
      header: 'ثبت عنوان دسته بندی',
      width: '50%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.getCategories();
      }
    });
  }
  deleteCategory(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteCategory(id).subscribe((response) => {
          console.log(response)
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getCategories();
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

  deleteSubCategory(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteSubCategory(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getCategories();
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
}
