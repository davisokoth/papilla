import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-cmp',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  user: any = {};
  loading = false;
  returnUrl: string;

  constructor(public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = '/dashboard/home';
  }

  login() {
    this.authenticationService.login(this.user.name, this.user.password)
      .subscribe(
        data => {
          console.log('Login Successful!!');
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('Login Error!');
          console.log(error);
          this.loading = false;
        });
    }
}
