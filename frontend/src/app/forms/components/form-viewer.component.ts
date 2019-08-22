import { Component, OnInit, Input, Output,
    EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

interface CustomFormEvent extends Event {
    detail?: {
        data?: Record<string, string>;
        status: string;
    };
}

@Component({
    selector: 'app-forms-viewer',
    templateUrl: './form-builder.component.html'
})
export class FormViewerComponent implements OnInit, OnChanges {
    @Input() srcDoc: string;
    @Output() formSaveSuccessEvent: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('formBuilder', { static: false }) refFormBuilder: ElementRef;
    constructor() { }

    ngOnInit() {
        window.document.addEventListener('user-submitted-workflow-form', (evt: CustomFormEvent) => {
            console.log(evt);
            this.formSaveSuccessEvent.emit();
        }, false);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes['srcDoc'].currentValue) {
            (this.refFormBuilder.nativeElement as HTMLIFrameElement).srcdoc = this.srcDoc;
            (this.refFormBuilder.nativeElement as HTMLIFrameElement).src = '';
        }
    }

}
