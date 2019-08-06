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
      // tslint:disable-next-line: max-line-length
      new Group({description: 'fter dragging Android File Transfer to the Applications folder, hold down the control key while clicking in the window and select Eject “Android File Transfer” from the menu. You can also delete the DMG file by moving it to the Trash.', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'This is an evangelical group', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'No swearing in this xtain subreddit', group_name: 'Wholesome Memes'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'anannana', group_name: 'janananana'}),
      new Group({description: 'We are all retards', group_name: 'WSB'}),
      new Group()
    ];
  }
}
