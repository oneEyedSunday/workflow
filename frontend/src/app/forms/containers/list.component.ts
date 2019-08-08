import { Component, OnInit } from '@angular/core';
import { IForm } from '@shared/interfaces';
import { finalize } from 'rxjs/operators';
import { FormsService } from '../services';

@Component({
    selector: 'app-forms-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    loading: boolean;
    forms: IForm[];
    constructor(
        private _formsSvc: FormsService
    ) { }

    ngOnInit() {
        this.getForms();
    }

    getForms(): void {
        this.loading = true;
        this._formsSvc.getForms()
            .pipe(
                finalize(() => this.loading = false)
            ).subscribe(
                forms => this.forms = forms,
                () => this.loading = false
            );
    }

}
