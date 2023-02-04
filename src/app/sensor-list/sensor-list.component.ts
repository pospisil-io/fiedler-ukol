import { Component } from '@angular/core';
import { Sensor } from '../sensor';
import { SENSORS } from '../mock-sensors';
import { SensorListRecord } from '../sensor-list-record';
import { SensorState } from '../sensor-state';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent {
  listTitle = 'Seznam senzoru';
  searchString: string = ''
  selectedSensors: Sensor[] = [];
  sensors = SENSORS
  sumOfChildren = (parent: Sensor) => {
    return this.sensors.filter((item) => {
      return item.parent === parent
    }).map((item) => { return item.value }).reduce((sum, value) => {
      return sum + value;
    }, 0)
  }
  selectNone = () => {
    this.selectedSensors = []
  }
  selectAll = () => {
    this.selectNone()
    this.sensors.forEach(sensor => {
      this.selectedSensors.push(sensor)
    });
  }
  checkboxSelect = (sensor: Sensor) => {
    if (this.selectedSensors.indexOf(sensor) === -1) {
      this.selectedSensors.push(sensor)
    } else {
      if(this.selectedSensors.length === 0 && this.selectedSensors.every((item) => {
        item.parent === this.selectedSensors[0].parent
      })){
        this.batchParent = sensor.parent
      }else{
        this.batchParent = undefined
      }
      this.selectedSensors.splice(this.selectedSensors.indexOf(sensor), 1)
    }
  }
  batchParent: Sensor | undefined = undefined;
  setBatchParent = (selected: Sensor[], parent: Sensor | undefined) => {
    selected.forEach((item) => {
      item.parent = parent
    })
  }
  hasParentInSelected = (sensor: Sensor) => {
    return this.selectedSensors.some((item) => { return sensor.parent === item})
  }
}
