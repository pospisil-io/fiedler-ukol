import { Component } from '@angular/core';
import { Sensor } from '../sensor';
import { SENSORS } from '../mock-sensors';
import { GROUPS } from '../mock-sensor-groups';
import { SensorGroup } from '../sensor-group';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent {
  listTitle = 'Seznam senzoru';
  sensors = SENSORS
  sensorGroups = GROUPS
  placeSensor = (group: SensorGroup, sensor: Sensor) => {
    group.members.push(sensor)
    sensor.group = group
  }
}
