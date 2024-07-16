import React, {FC} from 'react';
import {IComments} from "../../models/IComments/IComments";
import styles from './ComponentStyles.module.css'

interface IProps {
    comments: IComments[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            <ul>
                {
                    comments.map(comment => (
                        <li key={comment.id}>
                            <b>ID:</b> {comment.id} <br/>
                            <b>Name:</b> {comment.name}
                            <b>PostID:</b> {comment.postId} <br/>
                            <b>Email:</b> {comment.email} <br/>
                            <b>Body:</b> {comment.body} <br/>
                        </li>))
                }
            </ul>
        </div>
    );
};

export default CommentsComponent;