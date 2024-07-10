import React, {useState} from 'react';
import CommentsComponent from "../component/CommentsComponent/CommentsComponent";
import {IComments} from "../models/IComments/IComments";
import {getAllComments} from "../services/api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComments[]>()

    const getPosts = () =>{
        getAllComments().then(value  => setComments(value))
    }
    return (
        <div>
            <CommentsComponent />
        </div>
    );
};

export default CommentsPage;