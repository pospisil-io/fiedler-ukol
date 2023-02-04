import { Sensor } from "./sensor";
import { nanoid } from "nanoid";

export const SENSORS: Sensor[] = [
    {id: nanoid(10), label: 'Prvni senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Druhy senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Treti senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Ctvrty senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Paty senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Sesty senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Sedmy senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Osmy senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Devaty senzor', value: Math.random()*10, sensitivity: .1},
    {id: nanoid(10), label: 'Desaty senzor', value: Math.random()*10, sensitivity: .1},
]