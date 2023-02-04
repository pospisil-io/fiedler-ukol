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
  checkboxSelect = (sensor: Sensor) => {
    if(this.selectedSensors.indexOf(sensor) === -1){
      this.selectedSensors.push(sensor)
    }else{
      this.selectedSensors.splice(this.selectedSensors.indexOf(sensor), 1)
    }
  }
  batchParent: Sensor | undefined = undefined;
  setBatchParent = (selected: Sensor[], parent: Sensor | undefined) => {
    selected.forEach((item) => {
      item.parent = parent
    })
  }
}
