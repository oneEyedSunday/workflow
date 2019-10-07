import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services';
import { Process } from '@shared/interfaces';
import { AuthService } from '@shared/auth';
import { AuthorizationAwareComponent as WithAuth } from '@shared/authorization-aware.component';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-projects-list',
  templateUrl: './list.component.html'
})
export class ListComponent extends WithAuth implements OnInit {
  processes: Process[];
  loading: boolean;

  constructor(
    private _proSvc: ProcessService,
    authSvc: AuthService
  ) {
    super(authSvc);
  }

  ngOnInit() {
    this.loading = true;
    this.initFeather();
    this.getProcesses();
  }


  getProcesses() {
    this._proSvc.fetchProcesses()
      .subscribe(
        processess => this.processes = processess,
        () => {this.loading = false; },
        () => this.loading = false
      );
  }

  initFeather(): void {
    Promise.resolve().then(() => {
      feather.replace();
      (window as any).feather.replace();
    });
    feather.replace();

    setTimeout(() => (window as any).feather.replace(), 30);
  }

}
