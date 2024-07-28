import React from 'react';
import {useMyContext} from "../../context/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponents = () => {
    const {postStore: {allPosts}} = useMyContext()

    return (
        <div>
            {allPosts.map((post) => (<PostComponent post={post} key={post.id}/>))}
        </div>
    );
};

export default PostsComponents;