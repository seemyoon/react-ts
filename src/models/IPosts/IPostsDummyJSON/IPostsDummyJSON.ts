import {Reactions} from "./IPostsUserDummyJSON";

export interface IPostsDummyJSON {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
}


