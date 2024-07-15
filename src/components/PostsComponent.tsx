import React, {FC} from 'react';
import {IPosts} from "../models/IPosts/IPosts";

type IProps = {
    posts: IPosts[];
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            <ul>
                {posts.map(post => (<li key={post.id}>{post.id}{post.userId}{post.body}{post.title}</li>))}
            </ul>
        </div>
    );
};

export default PostsComponent;