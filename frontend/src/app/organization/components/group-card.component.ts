import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IGroup } from '@shared/interfaces';

@Component({
    selector: 'app-group-description-card',
    templateUrl: './group-card.component.html',
    styleUrls: ['./group-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDescriptionCardComponent {
  @Input() group: IGroup;
  @Input() hasPrivilege: boolean;
}

