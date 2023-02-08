import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sensor } from '../sensor';
import { Group } from '../group';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent {
  constructor(private sensorService: SensorService) { }

  listTitle = 'Seznam senzoru';

  @Input() searchString!: string;

  selectedGroup: Group | undefined

  selectedSensors: Sensor[] = [];
  @Output() selectedSensorsChange = new EventEmitter<Sensor[]>();

  @Input() sensors: Sensor[] = [];
  @Output() sensorsChange = new EventEmitter<Sensor[]>();

  @Input() groups: Group[] = [];
  @Output() groupsChange = new EventEmitter<Group[]>();

  ngOnChanges(){
    this.selectedSensorsChange.emit(this.selectedSensors)
  }

  selectNone() {
    this.selectedSensors = []
    this.selectedSensorsChange.emit(this.selectedSensors)
  }
  selectAll() {
    this.selectNone()
    this.sensors.forEach(sensor => {
      this.selectedSensors.push(sensor)
    });
    this.selectedSensorsChange.emit(this.selectedSensors)
  }

  assignToGroup(){
    if(this.selectedGroup) this.selectedGroup.sensors = this.selectedSensors
  }
}
