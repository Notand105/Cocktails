import {atom,map} from 'nanostores'

export type reunion= {
    start:string,
    end: string,
    date:string
}

export const reunions = map<reunion[]>

