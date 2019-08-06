import { Component, OnInit } from '@angular/core';
import { Group, IGroup } from '@shared/interfaces';

@Component({
    selector: 'app-group-list',
    templateUrl: './list.component.html'
})
export class GroupListComponent implements OnInit {
  groups: Group[];

  ngOnInit(): void {
    this.groups = [
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group()
    ];
  }
}
