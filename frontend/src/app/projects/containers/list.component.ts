import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services';
import { Process } from '@shared/interfaces';

@Component({
  selector: 'app-projects-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  processes: Process[];
  loading: boolean;

  constructor(
    private _proSvc: ProjectsService
  ) { }

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
