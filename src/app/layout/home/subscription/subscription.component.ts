import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  providers: [MessageService]
})
export class SubscriptionComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService) {
  }

  ngOnInit(): void {

  }


  regEmailNewsletter(): void {
    // this.service.regEmailNewsletter(this.emailForm.value).subscribe((response) => {
    //   if (response['success'] === true) {
    //     this.messageService.add({severity: 'success', summary: 'عضویت در خبرنامه ', detail: response['data'], sticky: true});
    //   } else {
    //     this.messageService.add({severity: 'error', summary: 'عضویت در خبرنامه ', detail: response['data'], sticky: true});
    //   }
    // });
  }

  regSmsNewsletter(): void {
    // this.service.regSmsNewsletter(this.mobileForm.value).subscribe((response) => {
    //   console.log(response);
    //   if (response['success'] === true) {
    //     this.messageService.add({severity: 'success', summary: 'عضویت در خبرنامه ', detail: response['data'], sticky: true});
    //   } else {
    //     this.messageService.add({severity: 'error', summary: 'عضویت در خبرنامه ', detail: response['data'], sticky: true});
    //   }
    // });
  }

}
