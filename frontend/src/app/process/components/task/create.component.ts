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
        const taskwithIds = {...this.task};
        if (typeof taskwithIds.groups !== 'number') {
            taskwithIds.groups = (this.task.groups || {}).id;
        }

        if (typeof taskwithIds.form !== 'number') {
            taskwithIds.form = (this.task.form || {}).id;
        }

        if (typeof taskwithIds.document !== 'number') {
            taskwithIds.document = (this.task.document || {}).id;
        }

        if (typeof taskwithIds.users !== 'number') {
            taskwithIds.users = (this.task.users || {}).id;
        }

        if (typeof taskwithIds.stage !== 'number') {
            taskwithIds.stage = (this.stage || {} as Stage).id;
        }
        console.log('emittibg: ', taskwithIds);
        this.taskUpdatedEvent.emit(taskwithIds);
        this.submitting = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (changes && changes['errored'] && changes['errored'].currentValue) {
            this.submitting = false;
        }
    }

    groupCompare(group: Partial<IGroup>, id: number) {
        return group.id === id;
    }

    userCompare(user: Partial<IUser>, selected: number) {
        return user.id === selected;
    }

    documentCompare(document: Partial<Document>, selected: number) {
        return document.id === selected;
    }

    formCompare(form: Partial<IForm>, selected: number) {
        return form.id === selected;
    }

}
