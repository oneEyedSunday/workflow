import { Component, OnInit, Input, Output,
    EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Stage } from '@shared/interfaces';

@Component({
    selector: 'app-project-stage',
    templateUrl: './stage-create.component.html'
})
export class StageComponent implements OnChanges {
    @Input() stage: Stage;
    @Input() errored: boolean;
    @Input() maxOrder: number;
    @Output() stageUpdatedEvent: EventEmitter<Stage> = new EventEmitter();
    submitting: boolean;


    submitForm() {
        this.stageUpdatedEvent.emit(this.stage);
        this.submitting = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes['errored'] && changes['errored'].currentValue) {
            this.submitting = false;
        }

        if (!(changes['maxOrder'] && changes['maxOrder'].currentValue)) {
            this.maxOrder = this.stage.order;
        }
    }

}
