import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {AdminServiceService} from '../../admin-service.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-feature-add-dialog',
  templateUrl: './feature-add-dialog.component.html',
  styleUrls: ['./feature-add-dialog.component.scss'],
  providers: [
    MessageService
  ]
})
export class FeatureAddDialogComponent implements OnInit {
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
              public config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      titleFarsi: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      )
    });
  }

  submitForm(): void {
    this.service.postFeature(this.form.value).subscribe((response) => {
      if (response['success'] === true) {
        this.ref.close(true);
        this.messageService.add({severity: 'success', summary: ' ثبت اطلاعات ', detail: response['data']});

      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response['data']});
      }
    });
  }

}
