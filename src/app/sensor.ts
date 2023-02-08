import { Gps } from "./gps";

export interface Sensor {
    id: number;
    label: string;
    value: number;
    unit: string;
    timestamp: number;
    coords: Gps;
}