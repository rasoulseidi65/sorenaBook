import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {AdminServiceService} from '../admin-service.service';
import {FeatureAddDialogComponent} from './feature-add-dialog/feature-add-dialog.component';
import {FeatureValueAddDialogComponent} from './feature-value-add-dialog/feature-value-add-dialog.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  providers: [
    MessageService, DialogService, ConfirmationService
  ]
})
export class FeaturesComponent implements OnInit {

  features: any = [];

  constructor(private messageService: MessageService,
              private service: AdminServiceService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    this.getFeatures();
  }
  getFeatures(){
    this.service.getAllFeature().subscribe((res) => {
      if (res['success'] === true) {
        this.features = res['data'];
        console.log(res)
      }
    });
  }
  showAddFeatureDialog(){
    const ref = this.dialogService.open(FeatureAddDialogComponent, {
      header: 'ثبت ویژگی',
      width: '50%'
    });
    ref.onClose.subscribe(res => {
      if (res === true) {
        this.getFeatures();
      }
    });
  }
  showAddFeatureValueDialog(featuresID: string){
    const ref = this.dialogService.open(FeatureValueAddDialogComponent, {
      data: {
        featuresID,
      },
      header: 'ثبت  مقدار ویژگی',
      width: '50%'
    });
    ref.onClose.subscribe(res => {
      if (res === true) {
        this.getFeatures();
      }
    });
  }
}
