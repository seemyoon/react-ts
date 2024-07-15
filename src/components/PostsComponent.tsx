import React, {FC} from 'react';
import {IPosts} from "../models/IPosts/IPosts";
type IProps = {
    posts: IPosts[];
}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            <ul>
                {posts.map(post => (<li>{post.id}</li>))}
            </ul>
        </div>
    );
};

export default PostsComponent;