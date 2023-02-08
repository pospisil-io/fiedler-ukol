import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent {
  @Input() sensor!: Sensor
  @Input() sensors: Sensor[] = []
  @Input() selectedSensors: Sensor[] = []
  @Output() selectedSensorsChange = new EventEmitter<Sensor[]>();

  date(timestamp: number) {
    return new Date(timestamp).toUTCString()
  }

  checkboxSelect(sensor: Sensor) {
    if (this.selectedSensors.indexOf(sensor) === -1) {
      this.selectedSensors.push(sensor)
    } else {
      this.selectedSensors.splice(this.selectedSensors.indexOf(sensor), 1)
    }
    this.selectedSensorsChange.emit(this.selectedSensors)
  }
}
