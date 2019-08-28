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
        // TODO (get organizatiion dynaimically)
        const formData = new FormData();
        formData.append('organization', '1');
        formData.append('description', group.description),
        formData.append('group_name', group.group_name);
        return this.http.post(this.url, formData)
            .pipe(
                catchError(this.handleError('Create Group', null))
            );
    }

    updateGroup(groupId: number, group: Group) {
        const formData = new FormData();
        formData.append('id', group.id);
        formData.append('organization', group.organization);
        formData.append('description', group.description),
        formData.append('group_name', group.group_name);
        return this.http.post(`${this.url}/${groupId}`, formData)
            .pipe(
                catchError(this.handleError('Update Group', null))
            );
    }

    addUserToGroups(groupId: number, userId: number) {
        const formData = new FormData();
        formData.append('user_obj', `${userId}`);
        formData.append('org', '1');
        formData.append('grp', `${groupId}`);
        return this.http.post(`${AppConfig.API_URL}/org/joingroup/`, formData).pipe(
            catchError(this.handleError('Failed to Add User to Group', null))
        );
    }

    removeUserFromGroup(id: number) {
        return this.http.delete(`${AppConfig.API_URL}/org/removeuserfromgroup/${id}`).pipe(
            catchError(this.handleError('Failed to Remove from Group'))
        );
    }
}
