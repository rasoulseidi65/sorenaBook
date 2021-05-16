import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AdminServiceService} from '../../admin-service.service';

@Component({
  selector: 'app-sub-category-add-dialog',
  templateUrl: './sub-category-add-dialog.component.html',
  styleUrls: ['./sub-category-add-dialog.component.scss'],
  providers: [
    MessageService
  ]
})
export class SubCategoryAddDialogComponent implements OnInit {
  public form: FormGroup;
  errorMessages = {
    title: [
      {type: 'required', message: 'عنوان دسته بندی را وارد کنید.'},
      {type: 'maxlength', message: 'عنوان دسته بندی نمی تواند از 500 کاراکتر بیشتر باشد.'}
    ]
  };
  constructor(private formBuilder: FormBuilder,
              public ref: DynamicDialogRef,
              private service: AdminServiceService,
              public messageService: MessageService,
              public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.createform();
  }
  createform(): void {
    this.form = this.formBuilder.group({
      categoryID: new FormControl(
        this.config.data.categoryID
      ),
      title: new FormControl('',
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      )
    });
  }

  submitForm(): void {
    console.log(this.form.value)
    this.service.addSubCategory(this.form.value).subscribe((response) => {

      if (response.success === true) {
        this.messageService.add({severity: 'success', summary: ' موفق', detail: response.data});
        this.ref.close(true);

      } else {
        this.messageService.add({severity: 'error', summary: '  ناموفق ', detail: response.data});
      }
    });
  }
}
