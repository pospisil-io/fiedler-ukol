import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() sensors: Sensor[] = []
  @Output() sensorsChange = new EventEmitter<Sensor[]>()

  @Input() selectedSensors: Sensor[] = []

  batchParent: Sensor | undefined = undefined;
  // setBatchParent(selected: Sensor[], parent: Sensor | undefined) {
  //   selected.forEach((item) => {
  //     item.parent = parent
  //   })
  // }
  // hasParentInSelected(sensor: Sensor) {
  //   return this.selectedSensors.some((item) => { return sensor.parent === item })
  // }
}
