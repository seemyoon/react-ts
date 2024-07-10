import React, {useState, useEffect} from 'react';
import CommentsComponent from "../component/CommentsComponent/CommentsComponent";
import {IComments} from "../models/IComments/IComments";
import {getAllComments} from "../services/api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        getAllComments().then((values: IComments[]) => setComments([...values]))
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;