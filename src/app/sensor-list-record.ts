import { Sensor } from "./sensor";
import { SensorState } from "./sensor-state";

export interface SensorListRecord {
    id: number,
    sensor: Sensor,
    selected: boolean,
    state?: SensorState
}