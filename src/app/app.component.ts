import { Component } from '@angular/core';
import { Group } from './group';
import { Sensor } from './sensor';
import { SensorService } from './sensor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sensorService: SensorService) { }

  title = 'DMA zony - aplikace';
  searchString: string = '';

  sensors: Sensor[] = [];
  groups: Group[] = [];
  
  selectedSensors: Sensor[] = [];

  getSensors(): void {
    this.sensorService.getSensors().subscribe((sensors) => {
      this.sensors = sensors
      // console.log(`sensors: `, sensors);
    })
  }
  getGroups(): void {
    this.sensorService.getGroups().subscribe((groups) => {
      this.groups = groups
    })
  }
  ngOnInit(): void {
    this.getSensors();
    this.getGroups();
  }
}
