import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminServiceService} from '../../admin-service.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-feature-value-add-dialog',
  templateUrl: './feature-value-add-dialog.component.html',
  styleUrls: ['./feature-value-add-dialog.component.scss']
})
export class FeatureValueAddDialogComponent implements OnInit {
  form: FormGroup;
  errorMessages = {
    title: [
      {type: 'required', message: 'عنوان دسته بندی را وارد کنید.'},
      {type: 'maxlength', message: 'عنوان دسته بندی نمی تواند از 500 کاراکتر بیشتر باشد.'}
    ]
  };
  constructor(private formBuilder: FormBuilder,
              private service: AdminServiceService,
              public ref: DynamicDialogRef,
              public messageService: MessageService,
              public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      featuresID: new FormControl(
        this.config.data.featuresID
      ),
      value: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      )
    });
  }

  submitForm(): void {
    this.service.postFeatureValue(this.form.value).subscribe((response) => {
      if (response['success'] === true) {
        this.ref.close(true);
        this.messageService.add({severity: 'success', summary: ' ثبت اطلاعات ', detail: response['data']});

      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response['data']});
      }
    });
  }


}
