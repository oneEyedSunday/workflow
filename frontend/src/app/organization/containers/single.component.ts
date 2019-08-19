import { Component, OnInit, TemplateRef } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { Group, IUser } from '@shared/interfaces';
import { GroupsService, UsersService } from '../services';
import * as feather from 'feather-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-group-view',
    templateUrl: './single.component.html'
})
export class SingleGroupViewComponent implements OnInit {
    editing: boolean;
    group: Group;
    loading = true;
    loadingMembers: boolean;
    submitting: boolean;
    users: IUser[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _groupSvc: GroupsService,
        private _usersSvc: UsersService,
        private _modal: NgbModal
    ) {}

    get usersNotInGroup(): IUser[] {
        return this.users.filter(u => this.group.usertogroups
            .findIndex(uig => (uig as any).user_obj === u.email) < 0);
    }


    ngOnInit() {
        this.fetchUsers();
        this._route.data.pipe(
            switchMap((data: { edit: boolean }) => {
                this.editing = data.edit;
                return this.getGroup();
            }),
            tap(group => this.group = group),
            tap(() => this.loading = false),
            tap(() => (window as any).feather.replace()),
            tap(() => this.forceFeather()),
            catchError(this.handleError)
        ).subscribe();
    }

    forceFeather() {
        feather.replace();
        setTimeout(() => {
            feather.replace();
            (window as any).feather.replace();
        }, 30);
        Promise.resolve()
            .then(() => {
                (window as any).feather.replace();
                (window as any).feather.replace();
            });
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

    fetchUsers() {
        this._usersSvc.fetchAllUsers()
            .subscribe(users => {
                this.users = users;
                // TODO filter by users in org
            });
    }

    removeUserFromGroup(userId: number) {

    }

    addUser(userId: number) {
        this.submitting = true;
        this._groupSvc.addUserToGroups(this.group.id, userId)
            .subscribe(() => {
                this.submitting = false;
                this._modal.dismissAll();
                const user = this.users.find(u => u.id === userId);
                if (user) {
                    this.group.usertogroups.push(user);
                }
            }, () => {
                this.submitting = false;
            });
    }

    openModal(content: TemplateRef<any>) {
        this._modal.open(content, {
            keyboard: false,
            backdrop: 'static'
        });
    }

    handleError(err: any) {
        return throwError(err);
    }
}
