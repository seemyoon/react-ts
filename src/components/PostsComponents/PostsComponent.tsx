import React, {FC} from 'react';
import {IPosts} from "../../models/IPosts/IPosts";

type IProps = {
    posts: IPosts[];
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            <ul>
                {posts.map(post => (<li key={post.id}>
                    <b>ID:</b> {post.id} <br/>
                    <b>UserID:</b> {post.userId} <br/>
                    <b>Body:</b> {post.body} <br/>
                    <b>Title:</b> {post.title} <br/>
                </li>))}
            </ul>
        </div>
    );
};

export default PostsComponent;