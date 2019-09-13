import { Injectable } from '@angular/core';
import { IGroup, Group } from '@shared/interfaces';
import { AppConfig } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '@shared/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '@shared/auth';
import { Observable } from 'rxjs';

@Injectable()
export class GroupsService {
    private readonly handleError: HandleError;
    private readonly url = AppConfig.API_URL + '/org/groups/';

    constructor(
        private http: HttpClient,
        private auth: AuthService,
        httpErrorHandler: HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError('Groups');
    }

    fetchGroups(): Observable<Group[]> {
        return this.http.get(this.url)
            .pipe(
                catchError(this.handleError('Fetch Groups', null))
            );
    }

    fetchGroup(groupId: number): Observable<Group> {
        return this.http.get(`${this.url}${groupId}`)
            .pipe(
                catchError(this.handleError('Fetch Group', null))
            );
    }

    createGroup(group: Partial<IGroup>) {
        // TODO (get organization dynaimically)
        const { description, group_name } = group;
        const data = {
            organization: 1,
            description, group_name
        };
        return this.http.post(this.url, data)
            .pipe(
                catchError(this.handleError('Create Group', null))
            );
    }

    updateGroup(groupId: number, group: Group) {
        const { id, organization, description, group_name } = group;
        const data = { id, organization, description, group_name };
        return this.http.post(`${this.url}/${groupId}`, data)
            .pipe(
                catchError(this.handleError('Update Group', null))
            );
    }

    addUserToGroups(groupId: number, userId: number) {
        const data = {
            user_obj: userId,
            org: 1,
            grp: groupId,
        };
        return this.http.post(`${AppConfig.API_URL}/org/joingroup/`, data).pipe(
            catchError(this.handleError('Failed to Add User to Group', null))
        );
    }

    removeUserFromGroup(id: number) {
        return this.http.delete(`${AppConfig.API_URL}/org/removeuserfromgroup/${id}`).pipe(
            catchError(this.handleError('Failed to Remove from Group'))
        );
    }
}
