import React, {FC} from 'react';
import {IPostsDummyJSON} from "../../models/IPosts/IPostsDummyJSON/IPostsDummyJSON";

type IProps = {
    posts: IPostsDummyJSON[];
}
const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            <ul>
                {posts.map(post => (<li key={post.id}>
                    <b>ID:</b> {post.id} <br/>
                    <b>UserID:</b> {post.userId} <br/>
                    <b>Title:</b> {post.title} <br/>
                    <b>Body:</b> {post.body} <br/>
                    <b>Tags:</b> {post.tags.join(', ')} <br/>
                    <b>Reactions:</b> Likes: {post.reactions.likes}, Dislikes: {post.reactions.dislikes} <br/>
                    <b>Views:</b> {post.views} <br/>
                </li>))}
            </ul>
        </div>
    );
};

export default PostsComponent;