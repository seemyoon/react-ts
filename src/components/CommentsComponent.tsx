import React, {FC} from 'react';
import {IComments} from "../models/IComments/IComments";
interface IProps{
    comments: IComments[];
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => (
                    <li key={comment.id}>{comment.id}{comment.name}{comment.postId}{comment.email}{comment.body}</li>))
            }
        </div>
    );
};

export default CommentsComponent;