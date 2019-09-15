import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@shared/auth';
import { finalize, take } from 'rxjs/operators';
import { IUser } from '@shared/interfaces';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loading: boolean;
  authError: boolean;
  creds: Pick<IUser, 'email' | 'password'> = {email: '', password: ''};
  returnUrl: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.queryParamMap.pipe(take(1))
      .subscribe(params => {
      this.returnUrl = params.get('returnUrl');
    });
  }


  login() {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.authError = null;

    this.auth.login(this.creds)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        () => this.router.navigate([ this.returnUrl || '/dashboard' ]),
        () => {
          this.authError = true;
          this.loading = false;
        }
      );
  }

}
