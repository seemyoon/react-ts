import React, {FC} from 'react';
import {ICommentsDummyJSON} from "../../models/IComments/ICommentsDummyJSON/ICommentsDummyJSON";
import styles from '../../pages/CommentsPage/CommentsComponentStyles.module.css'

interface IProps {
    comments: ICommentsDummyJSON[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            <ul>
                {
                    comments.map(comment => (
                        <li key={comment.id}>
                            <b>ID:</b> {comment.id} <br/>
                            <b>PostID:</b> {comment.postId} <br/>
                            <b>Body:</b> {comment.body} <br/>
                            <b>Likes:</b> {comment.likes} <br/>
                            <b>User ID:</b> {comment.user.id} <br/>
                            <b>Username:</b> {comment.user.username} <br/>
                            <b>Full Name:</b> {comment.user.fullName} <br/>
                        </li>))
                }
            </ul>
        </div>
    );
};

export default CommentsComponent;