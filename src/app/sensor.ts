import { SensorGroup } from "./sensor-group";

export interface Sensor {
    id: number;
    label: string;
    group?: SensorGroup;
    value: number;
}