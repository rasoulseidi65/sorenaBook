import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  formadmin: FormGroup;

  constructor(private fb: FormBuilder,
              private service: AuthService,
              private route: Router,
              private localstorage:LocalStorageService) {}

  ngOnInit(): void {
    this.adminform();
  }

  adminform() {
    this.formadmin = this.fb.group({
      mobile: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  getadmin() {
    this.service.getadmin(this.formadmin.value).subscribe((result) => {
      if (result['success'] === true) {
        this.localstorage.saveCurrentUser(JSON.stringify(result ['data'] ));
        this.route.navigate(['admin/panel']);
      }
    });
  }
}
