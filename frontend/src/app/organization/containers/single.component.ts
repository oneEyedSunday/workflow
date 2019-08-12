import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { Group } from '@shared/interfaces';
import { GroupsService } from '../services';
import * as feather from 'feather-icons';

@Component({
    selector: 'app-group-view',
    templateUrl: './single.component.html'
})
export class SingleGroupViewComponent implements OnInit {
    editing: boolean;
    group: Group;
    loading = true;
    loadingMembers: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _groupSvc: GroupsService
    ) {}


    ngOnInit() {
        feather.replace();
        this._route.data.pipe(
            switchMap((data: { edit: boolean }) => {
                this.editing = data.edit;
                return this.getGroup();
            }),
            tap(group => this.group = group),
            tap(() => this.loading = false),
            catchError(this.handleError)
        ).subscribe();
    }


    getGroup(): Observable<Group> {
        return this._route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                if (isNaN(+params.get('groupId'))) {
                    throw new Error('Invalid group id');
                } else {
                    return this._groupSvc.fetchGroup(+params.get('groupId'));
                }
            })
        );
    }

    handleError(err: any) {
        return throwError(err);
    }
}
