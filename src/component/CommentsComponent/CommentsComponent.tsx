import React, {FC} from 'react';
import {IComments} from "../../models/IComments/IComments";

interface TypeProps {
    comments: IComments[]
}

const CommentsComponent: FC<TypeProps> = ({comments}) => {
    console.log(comments)
    return (
        <div>

            <ul>
                {
                    comments.map(comment => (
                        <li key={comment.id}>{comment.id}{comment.name}{comment.postId}{comment.email}{comment.body}</li>))
                }
            </ul>


        </div>
    );
};

export default CommentsComponent;