import {Component, OnInit} from '@angular/core';
import {LayoutServiceService} from '../../layout-service.service';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OwlOptions} from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [MessageService]
})
export class ProductDetailComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left fa-2x"></i>',
      '<i class="fa fa-chevron-right fa-2x"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 4,
      },
    },
  };
  responsiveOptions: any[] = [
    {
      breakpoint: '1600px',
      numVisible: 3,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  images: any[] = [];
  featuresValues: any[] = [];
  product: any;
  displayBasic: boolean;
  isLogged: boolean;
  productID: string | null;
  count: number = 1;
  formComment:FormGroup;
  commentText:string;
  // public date = moment(Date.now()).locale('fa').format('YYYY/M/D');
  // public time = moment(Date.now()).locale('fa').format('HH:mm:ss');
  constructor(private service: LayoutServiceService,
              public localStorage: LocalStorageService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => (this.productID = params.get('id'))
    );
    this.createform();
    this.service.getProducts(this.productID).subscribe((response) => {
      if (response.success === true) {
        console.log(response)
        this.product = response.data;
        if (this.product.ProductFeature.length > 0) {
          for (let index = 0; index < this.product.ProductFeature.length; index++) {
            this.featuresValues.push({
              feature: this.product.ProductFeature[index].Feature,
              value: this.product.ProductFeature[index].FeaturesValue,
            });
          }
          if (this.product.image != null) {
            this.images.push({
              image: this.product.image,
              thumbnailImageSrc: this.product.image,
              previewImageSrc: this.product.image,
            });
          }
          if (this.product.gallery.length > 0) {
            this.product.gallery.forEach((item) => {
              this.images.push({
                image: item,
                thumbnailImageSrc: item,
                previewImageSrc: item,
              });
            });
          }

        }
      }
    });
  }
  createform(): void {

    this.formComment = this.formBuilder.group({
      userID: new FormControl(null, [Validators.required]),
      productID: new FormControl(this.productID, [Validators.required]),
      commentText: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),

    });
  }
}
