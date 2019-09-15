import { Component, OnInit } from '@angular/core';
import { Group, IGroup } from '@shared/interfaces';
import { GroupsService } from '../services';
import { finalize } from 'rxjs/operators';
import { AuthService } from '@shared/auth';
import { AuthorizationAwareComponent as WithAuth } from '@shared/authorization-aware.component';

@Component({
    selector: 'app-group-list',
    templateUrl: './list.component.html'
})
export class GroupListComponent extends WithAuth implements OnInit {
  groups: Group[];
  groupsAndIcon: Group[];
  loading: boolean;

  constructor(
    private _groupsSvc: GroupsService,
    authSvc: AuthService
    ) {
      super(authSvc);
    }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.loading = true;
    this._groupsSvc.fetchGroups()
      .pipe(
        finalize(() => this.loading = false)
      ).subscribe(
        groups => {
          this.groups = groups;
          this.groupsAndIcon = [...groups, null as Group];
        },
        () => this.loading = false
      );
  }
}
