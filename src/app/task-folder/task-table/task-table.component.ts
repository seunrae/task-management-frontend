import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent {
  @Input()tasks: Task[];

}
