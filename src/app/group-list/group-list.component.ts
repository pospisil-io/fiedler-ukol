import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sensor } from '../sensor';
import { Group } from '../group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {

  listTitle = 'Seznam skupin';
  searchString: string = ''

  @Input() selectedSensors: Sensor[] = [];
  @Output() selectedSensorsChange = new EventEmitter<Sensor[]>();

  @Input() sensors: Sensor[] = [];
  @Output() sensorsChange = new EventEmitter<Sensor[]>();

  @Input() groups: Group[] = [];
  @Output() groupsChange = new EventEmitter<Group[]>();
}
