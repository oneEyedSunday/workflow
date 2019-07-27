import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent implements OnInit {
  @Input() status: string; // update when enums are ready
  @Input() text: string;
  @Input() type; // differentiate between sttaus types?

  // TODO add auxiliary sttaus classes
  bgClass: 'bg-primary' | 'bg-danger' | 'bg-success';

  ngOnInit(): void {
    this.bgClass = Math.random() > 0.45 ? 'bg-primary' : 'bg-success';
  }
}

