import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {AdminServiceService} from '../admin-service.service';

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
  }

}
