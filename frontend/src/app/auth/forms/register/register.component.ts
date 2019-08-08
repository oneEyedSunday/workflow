import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth';
import { finalize } from 'rxjs/operators';
import { IUserRegisteration } from '@shared/interfaces';

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  // TODO force user to be logged in
  constructor() { }

  ngOnInit() {
  }

}
