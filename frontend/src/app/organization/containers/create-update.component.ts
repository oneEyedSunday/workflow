import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { Group, IGroup } from '@shared/interfaces';
import { GroupsService } from '../services';

@Component({
  selector: 'app-group-create-update',
  templateUrl: './create-update.component.html'
})
export class GroupCreateUpdateComponent implements OnInit {
  editing: boolean;
  group: Group;
  groupError: boolean;


  constructor(
    private _actRoute: ActivatedRoute,
    private _router: Router,
    private _groupsSvc: GroupsService
  ) { }


  ngOnInit() {
    this._actRoute.data.pipe(
      switchMap((data: { edit: boolean }) => {
        this.editing = data.edit;
        return iif(
          () => this.editing,
          this.getGroup(),
          of(new Group())
        );
      }),
      tap(group => this.group = group),
      catchError(this.handleError),
    ).subscribe();
  }

  getGroup(): Observable<Group> {
    return this._actRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (isNaN(+params.get('groupId'))) {
          throw new Error('Invalid group id');
        } else {
          return this._groupsSvc.fetchGroup(+params.get('groupId'));
        }
      })
    );
  }

  handleError(err: any) {
    // show error in UI
    // TODO (oneeyedsunday) move this to shared since its similar
    return throwError(err);
  }

  handleGroupUpdatedEvent(group: Partial<IGroup> | IGroup) {
    this.groupError = false;
    if (group.id) {
      this.updateGroup(group as IGroup);
    } else {
      this.createGroup(group);
    }
  }

  createGroup(group: Partial<IGroup>) {
    this._groupsSvc.createGroup(group)
      .subscribe((res: Group) => this._router.navigate(['/organizations/groups', res.id]),
      () => this.passErrorToGroupForm());
  }

  updateGroup(group: IGroup) {
    this._groupsSvc.updateGroup(group.id, group)
      .subscribe((res: Group) => this._router.navigate(['organizations/groups', res.id]),
        (() => this.passErrorToGroupForm()));
  }

  passErrorToGroupForm(err?: any) {
    this.groupError = true;
  }
}


