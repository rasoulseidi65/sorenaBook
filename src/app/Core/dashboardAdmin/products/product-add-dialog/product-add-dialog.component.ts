import {Component, OnInit} from '@angular/core';
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
  commissionPersentFlag: boolean = false;
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
  featuresValues: any[] = [];
  showSelectedFeatures: any[] = [];

  constructor(private formBuilder: FormBuilder,
              private service: AdminServiceService,
              public ref: DynamicDialogRef,
              public messageService: MessageService,
              public config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.geFeatures();
    this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
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

  submitForm() {
    this.service.addProduct(this.form.value).subscribe((response) => {
      console.log(response);
      if (response['success'] === true) {
        const value = {
          productID: response.result._id,
          productFeature: this.showSelectedFeatures,
        };
        this.service.addProductFeature(value).subscribe((res) => {
          if (res['success'] === true) {
            this.messageService.add({severity: 'success', summary: ' موفقیت ', detail: 'محصول با موفقیت ثبت شد'});
          }
        })
      }
    });
  }
  onSubCategory(e:any){
    let category = e.value;
    this.form.patchValue({subCategory: category._id});
  }
  addSelectedValues(event: any): void {
    console.log(event);
    // const parent = this.featuresValues.find(x => x.value === event.value)._id;
    this.showSelectedFeatures.push(
      {
        featuresID: this.featuresID,
        title: this.featuresTitle,
        valueID: event.value['_id'],
        value: event.value['value']
      }
    );
// console.log(this.showSelectedFeatures)
  }

  deleteFeature(item: any) {
    this.showSelectedFeatures.splice(item, 1);
  }

  getCategories(): any {
    this.service.getAllCategories().subscribe((response) => {
      if (response.success === true) {
        console.log(response);
        this.categories = response.data;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' دریافت اطلاعات ',
          detail: response.data,
        });
      }
    });
  }

  geFeatures(): any {
    this.service.getAllFeature().subscribe((response) => {
      if (response['success'] === true) {
        console.log(response);
        this.features = response['data'];
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' دریافت اطلاعات ',
          detail: response['data'],
        });
      }
    });
  }

  showSubCategory(e: any) {
    this.form.controls['categoryID'].setValue(e.value);
    let value = e.value;
    if (value['SubCategory'].length > 0) {
      this.subCategory = value['SubCategory'];
    }
  }

  showFeatureValue(e: any) {
    this.featuresValues = e.value['FeaturesValue'];
    this.featuresID = e.value['_id'];
    this.featuresTitle = e.value['titleFarsi'];
    // let value = e.value;
    // if (value['FeaturesValue'].length > 0) {
    //   this.featuresValues = value['FeaturesValue'];
    // }
  }

  imageUploader(event): void {
    const formData = new FormData();
    formData.append('image', event.files[0], event.files[0].name);
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
      console.log(response)
      if (response.success === true) {

        let imgPathList: any[] = [];
        response.imagePath.forEach(element => {
          imgPathList.push('http://api.sorenabook.ir/' + element.path);
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
