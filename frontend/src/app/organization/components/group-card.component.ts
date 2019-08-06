import { Component, OnInit, Input } from '@angular/core';
import { IGroup } from '@shared/interfaces';

@Component({
    selector: 'app-group-description-card',
    templateUrl: './group-card.component.html',
    styleUrls: ['./group-card.component.scss']
})
export class GroupDescriptionCardComponent {
  @Input() group: IGroup;
}

