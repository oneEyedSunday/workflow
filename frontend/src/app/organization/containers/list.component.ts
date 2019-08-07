import { Component, OnInit } from '@angular/core';
import { Group, IGroup } from '@shared/interfaces';
import { GroupsService } from '../services';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-group-list',
    templateUrl: './list.component.html'
})
export class GroupListComponent implements OnInit {
  groups: Group[];
  groupsAndIcon: Group[];
  loading: boolean;

  constructor(private _groupsSvc: GroupsService) { }

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
