import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminServiceService} from '../../admin-service.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss'],
  providers: [MessageService],
})
export class ProductAddDialogComponent implements OnInit {
  public form: FormGroup;
  index: number = 0;
  titleCategory: string[] = [];
  commissionPersent: string;//حق کمیسیون
  commissionPersentFlag:boolean=false
  activeState: boolean[] = [true, true, true];
  errorMessages = {
    title: [
      {type: 'required', message: 'عنوان محصول را وارد کنید.'},
      {type: 'maxlength', message: 'عنوان محصول نمی تواند از 200 کاراکتر بیشتر باشد.'}
    ],
    categoryID: [
      {type: 'required', message: 'دسته اول را انتخاب کنید.'}
    ],
    subCategory: [
      {type: 'required', message: 'دسته دوم را انتخاب کنید.'}
    ],
    subSubCategory: [
      {type: 'required', message: 'دسته سوم را انتخاب کنید.'}
    ],
    offer: [
      {type: 'required', message: 'تخفیف را انتخاب کنید.'}
    ],
    topText: [
      {type: 'required', message: 'متن بالای محصول را وارد کنید.'},
      {type: 'maxlength', message: 'متن بالای محصول نمی تواند از 200 کاراکتر بیشتر باشد.'}
    ],
    price: [
      {type: 'required', message: 'قیمت محصول را وارد کنید.'}
    ],
    count: [
      {type: 'required', message: 'تعداد محصول را وارد کنید.'}
    ],
    detail: [
      {type: 'required', message: 'جزئیات محصول را وارد کنید.'}
    ],
    help: [
      {type: 'required', message: 'راهنما محصول را وارد کنید.'}
    ],
    briefFeature: [
      {type: 'required', message: 'خلاصه ویژگی های محصول را وارد کنید.'}
    ],
    image: [
      {type: 'required', message: 'تصویر محصول را بارگذاری کنید.'}
    ],
    freeSend: [
      {type: 'required', message: 'ارسال رایگان را انتخاب کنید.'}
    ],
    weight: [
      {type: 'required', message: 'وزن محصول را انتخاب کنید.'}
    ],
  };
  categories: any[] = [];
  subCategory: any[] = [];
  subSubCategory: any[] = [];
  features: any[] = [];
  featuresID: any;
  featuresValueID: any;
  featuresTitle: any;
  values: any[] = [];
  showSelectedFeatures: any[] = [];
  constructor( private formBuilder: FormBuilder,
               private service: AdminServiceService,
               public ref: DynamicDialogRef,
               public messageService: MessageService,
               public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.createform();
  }
  createform(): void {
    this.form = this.formBuilder.group({
      sellerID: new FormControl(
       ''
      ),
      title: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(200)
        ]
      ),
      categoryID: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      subCategory: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      subSubCategory: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      count: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      price: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      topText: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(200)
        ]
      ),
      offer: new FormControl(
        false,
        [
          Validators.required
        ]
      ),
      offerPercent: new FormControl(
        0
      ),
      offerText: new FormControl(
        null
      ),
      detail: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      help: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      briefFeature: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      image: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      gallery: new FormControl(
        null
      ),
      freeSend: new FormControl(
        false,
        [
          Validators.required
        ]
      ),
      weight: new FormControl(
        null,
        [
          Validators.required
        ]
      ),
    });
  }

  submitForm(){

  }
  imageUploader(event): void {
    const formData = new FormData();
    formData.append('file', event.files[0], event.files[0].name);
    this.service.uploadFile(formData).subscribe((response) => {
      if (response.success === true) {
        this.form.controls.image.setValue(response.imagePath);

        this.messageService.add({
          severity: 'success',
          summary: ' آپلود تصویر محصول ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر محصول ',
          detail: response.data,
        });
      }
    });
  }

  onMultipleUpload(event): void {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('files', event.files[i], event.files[i].name);
    }
    this.service.uploadMultiFiles(formData).subscribe((response) => {

      if (response.success === true) {

        let imgPathList : any[] = [];
        response.imagePath.forEach(element => {
          imgPathList.push('http://api.jahantebkhoram.ir/'+ element.path);
        });

        this.form.controls.gallery.setValue(imgPathList);

        this.messageService.add({
          severity: 'success',
          summary: ' آپلود تصویر محصول ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر محصول ',
          detail: response.data,
        });
      }
    });
  }
}
