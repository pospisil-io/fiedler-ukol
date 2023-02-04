import { Sensor } from "./sensor";

export interface SensorGroup {
    id: number;
    label: string;
    members: Sensor[];
    main: number;
}