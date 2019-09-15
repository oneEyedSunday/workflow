import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services';
import { Process } from '@shared/interfaces';
import { AuthService } from '@shared/auth';
import { AuthorizationAwareComponent as WithAuth } from '@shared/authorization-aware.component';

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

}
