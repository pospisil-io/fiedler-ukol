// import { SensorGroup } from "./sensor-group";

export interface Sensor {
    id: string;
    label: string;
    parent?: Sensor;
    value: number;
    unit: string;
    sensitivity: number;
    timestamp?: number;
    coords?: number[]
}