import { Component, Input, Output,
  EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Process } from '@shared/interfaces';

@Component({
  selector: 'app-project-process-meta',
  templateUrl: './meta.component.html'
})
export class ProcessMetaComponent implements OnChanges {
  @Input() process: Process;
  @Input() errored: boolean;
  @Output() processMetaUpdatedEvent: EventEmitter<Process> = new EventEmitter();
  submitting: boolean;


  submitForm() {
      this.processMetaUpdatedEvent.emit(this.process);
      this.submitting = true;
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes && changes['errored'] && changes['errored'].currentValue) {
          this.submitting = false;
      }
  }

}
