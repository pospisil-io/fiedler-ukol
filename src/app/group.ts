import { Sensor } from "./sensor";

export interface Group {
    id: number
    label: string;
    main?: Sensor;
    sensors: Sensor[];
    toleranceValue: number;
    toleranceTime: number;
}