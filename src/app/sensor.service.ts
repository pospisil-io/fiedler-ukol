import { Injectable } from '@angular/core';
import { Sensor } from './sensor';
import { Group } from './group';
import { Gps } from './gps';
import { Observable, of } from 'rxjs';
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('0123456789', 10)

import {sensors, groups} from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor() { }

  sensors: Sensor[] = sensors
  groups: Group[] = groups

  getSensors(): Observable<Sensor[]> {
    return of(this.sensors)
  }
  getGroups(): Observable<Group[]> {
    return of(this.groups)
  }
  getSensor(id: number) {
    return this.sensors.find(item => item.id === id)
  }
  addSensor(sensor: Sensor) {
    if (this.sensors.indexOf(sensor) === -1) {
      this.sensors.push(sensor)
    }
  }
  updateSensor(sensor: Sensor) {
    let original = this.sensors.find(item => item === sensor)
    if (original) {
      original = sensor
    }
  }
  deleteSensor(sensor: Sensor) {
    if (this.sensors.indexOf(sensor) > -1) {
      this.sensors.splice(this.sensors.indexOf(sensor), 1)
    }
  }

  serverRequest(request: string) {
    let result: string = '{error: "no result"}'
    return result
  }
}
