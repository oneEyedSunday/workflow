import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth';
import { finalize } from 'rxjs/operators';
import { IUserRegisteration } from '@shared/interfaces';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  loading: boolean;
  authError: boolean;
  creds: IUserRegisteration = {
    email: '', password: '', first_name: '', last_name: '', phone_number: ''};

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  register() {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.authError = false;

    this.auth.register(this.creds)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        () => this.router.navigate(['/dashboard']),
        () => this.authError = true
      );
  }

}
