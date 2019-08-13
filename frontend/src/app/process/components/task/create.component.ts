import {
    Component, OnInit, Input,
    Output, EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';

import { Task, IForm, Document, IUser, IGroup, Stage } from '@shared/interfaces';

@Component({
    selector: 'app-task-create',
    templateUrl: './create.component.html'
})
export class TaskCreateComponent implements OnChanges {
    @Input() task: Task;
    @Input() errored: boolean;
    @Input() forms: IForm[] = [];
    @Input() documents: Document[] = [];
    @Input() users: IUser[] = [];
    @Input() groups: IGroup[] = [];
    @Input() stage: Stage;
    @Output() taskUpdatedEvent: EventEmitter<Task> = new EventEmitter();
    submitting: boolean;

    submitForm() {
        this.taskUpdatedEvent.emit(this.task);
        console.log('emittibg: ', this.task);
        this.submitting = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (changes && changes['errored'] && changes['errored'].currentValue) {
            this.submitting = false;
        }
    }

}
