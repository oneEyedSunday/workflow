import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { IGroup, Group } from '@shared/interfaces';


@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupFormComponent implements OnChanges {
  @Input() group: IGroup;
  @Input() errored: boolean;
  @Output() formSubmitted: EventEmitter<IGroup | Partial<IGroup>> = new EventEmitter<IGroup>();

  submitting: boolean;


  submitForm() {
    this.formSubmitted.emit(this.group);
    this.submitting = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['errored'].currentValue) {
      // form has errored
      this.submitting = false;
    }
  }
}

