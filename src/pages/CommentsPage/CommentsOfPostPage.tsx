import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useCustomLocation} from "../../hooks/useLocation";
import {IPosts} from "../../models/IPosts/IPosts";
import {getAllPosts} from "../../services/api.service";
import CommentsOfPostComponent from "../../components/CommentsComponents/CommentsOfPostComponent";

const CommentsOfPostPage = () => {
    const {postId} = useParams();
    const location = useCustomLocation<IPosts>();
    const state = location.state;
    const [post, setPost] = useState<IPosts[]>()
    useEffect(() => {
        getAllPosts().then((value: IPosts[]) => setPost(value))
    }, [postId]);
    console.log(location)
    return (
        <div>
            <CommentsOfPostComponent key={state.id} postId={Number(state.id)}/>
        </div>
    );
};

export default CommentsOfPostPage;