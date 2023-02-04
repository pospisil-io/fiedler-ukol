// import { SensorGroup } from "./sensor-group";

export interface Sensor {
    id: string;
    label: string;
    parent?: Sensor;
    value: number;
    sensitivity: number;
}