import React, {FC, useEffect, useState} from 'react';
import {IPosts} from "../../models/IPosts/IPosts";
import {getAllPostsOfUser} from "../../services/api.service";
import {Link} from "react-router-dom";

interface IProps {
    id: number
}

const PostsOfUserComponent: FC<IProps> = ({id}) => {
    const [postsOfUser, setPostsOfUser] = useState<IPosts[]>([])
    useEffect(() => {
        getAllPostsOfUser(id).then((value: IPosts[]) => setPostsOfUser(value))
    }, [id]);
    return (
        <div>
            <ul>
                {
                    postsOfUser.map(postOfUser => (<li key={postOfUser.id}>
                        <b>ID:</b> {postOfUser.id} <br/>
                        <b>UserID:</b> {postOfUser.userId} <br/>
                        <b>Body:</b> {postOfUser.body} <br/>
                        <b>Title:</b> {postOfUser.title} <br/>
                        <Link to={(`/users/${postOfUser.userId}/posts/${postOfUser.id}`) + ""} state={postOfUser}>
                            Click here to move to comments of post
                        </Link>
                    </li>))
                }
            </ul>
        </div>
    );
};
export default PostsOfUserComponent;