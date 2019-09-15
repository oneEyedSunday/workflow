import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { IForm } from '@shared/interfaces';

@Component({
    selector: 'app-form-card',
    templateUrl: './form-card.component.html',
    styles: [
        `
        :host {
            display: block;
            padding: 1em 0;
        }

        a { color: inherit }
        .form__name {
            white-space: nowrap;
        }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCardComponent implements OnInit {
    @Input() form: IForm;
    @Input() privilegedUser: boolean;
    link: string;

    ngOnInit() {
       this.link = this.privilegedUser ? `/forms/${this.form.id}` : `/forms/view/${this.form.id}`;
    }
}
