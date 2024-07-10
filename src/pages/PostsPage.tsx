import React, {useState, useEffect} from 'react';
import PostsComponent from "../component/PostsComponent/PostsComponent";
import {IPosts} from "../models/IPosts/IPosts";
import {getAllPosts} from "../services/api.service";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        getAllPosts().then((values: IPosts[]) => setPosts([...values]))
    }, []);
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;