import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sensor } from '../sensor';
import { Group } from '../group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  @Input() group!: Group
  @Input() groups: Group[] = []
  @Input() sensors: Sensor[] = []
  @Input() selectedSensors: Sensor[] = []

  sumOfValues() {
    this.group.sensors.filter((sensor) => {
      return sensor !== this.group.main
    }).reduce((sum, sensor) => {
      return sum + sensor.value
    }, 0)
  }
}
