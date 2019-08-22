import { Component, OnInit } from '@angular/core';
import { IUser } from '@shared/interfaces';
import { DashboardService } from './service';
import { finalize, tap } from 'rxjs/operators';
import * as feather from 'feather-icons';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../organization/components/group-card.component.scss']
})
export class DashboardComponent implements OnInit {
    me: IUser;
    loading: boolean;
    constructor(private _dashSvc: DashboardService) { }

    ngOnInit() {
        feather.replace();
        this.getUserDetails();
    }

    getUserDetails(): void {
        this.loading = true;
        this._dashSvc.fetchUserDetails()
        .pipe(
            tap(() => this.triggerFeather()),
            finalize(() => this.loading = false)
        )
        .subscribe(user => this.me = user);
    }

    triggerFeather(): void {
        Promise.resolve().then(() => {
          feather.replace();
          (window as any).feather.replace();
        });
        feather.replace();

        setTimeout(() => (window as any).feather.replace(), 30);
    }

}
