import React, {useEffect, useState} from 'react';
import {IPosts} from "../../models/IPosts/IPosts";
import {getAllPosts} from "../../services/api.service";
import PostsComponent from "../../components/PostsComponents/PostsComponent";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect(() => {
        getAllPosts().then((value: IPosts[]) => setPosts(value))
    }, []);
    return (
        <div>
            <PostsComponent posts={posts}  />
        </div>
    );
};

export default PostsPage;