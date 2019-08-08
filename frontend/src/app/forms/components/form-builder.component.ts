import { Component, OnInit, Input, Output,
    EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { IForm } from '@shared/interfaces';

interface CustomFormEvent extends Event {
    detail?: {
        data?: IForm;
        status: string;
    };
}

@Component({
    selector: 'app-forms-builder',
    templateUrl: './form-builder.component.html'
})
export class FormBuilderComponent implements OnInit, OnChanges {
    @Input() srcDoc: string;
    @Output() formSaveSuccessEvent: EventEmitter<IForm> = new EventEmitter<IForm>();
    @ViewChild('formBuilder', { static: false }) refFormBuilder: ElementRef;
    constructor() { }

    ngOnInit() {
        window.document.addEventListener('workflow-form-saved', (evt: CustomFormEvent) => {
            const { detail } = evt;
            if (detail.data) {
                this.formSaveSuccessEvent.emit(detail.data);
            }
        }, false);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['srcDoc'].currentValue) {
            (this.refFormBuilder.nativeElement as HTMLIFrameElement).srcdoc = this.srcDoc;
            (this.refFormBuilder.nativeElement as HTMLIFrameElement).src = '';
        }
    }

}
