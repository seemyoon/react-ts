import {Reactions} from "./Reactions";
export interface IPosts {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}
