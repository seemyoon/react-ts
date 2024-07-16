import {User} from "./ICommentsUserDummyJSON";
export interface ICommentsDummyJSON {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}