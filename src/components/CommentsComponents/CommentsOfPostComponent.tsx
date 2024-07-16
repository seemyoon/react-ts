import React, {FC, useEffect, useState} from 'react';
import {getAllCommentsOfPost} from "../../services/api.service";
import {IComments} from "../../models/IComments/IComments";

interface IProps {
    postId: number;
}

const CommentsOfPostComponent: FC<IProps> = ({postId}) => {
    const [commentsOfPost, setCommentOfPost] = useState<IComments[]>([])
    useEffect(() => {
        getAllCommentsOfPost(postId).then((value: IComments[]) => setCommentOfPost(value))

    }, [postId]);
    return (
        <div>
            <ul>
                {
                    commentsOfPost.map(commentOfPost => (<li key={commentOfPost.id}>
                        <b>PostID:</b> {commentOfPost.postId} <br/>
                        <b>ID:</b> {commentOfPost.id} <br/>
                        <b>Body:</b> {commentOfPost.body} <br/>
                        <b>Name:</b> {commentOfPost.name} <br/>
                        <b>Email:</b> {commentOfPost.email} <br/>
                    </li>))
                }
            </ul>
        </div>
    );
};

export default CommentsOfPostComponent;