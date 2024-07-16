import React, {useEffect, useState} from 'react';
import {IComments} from "../../models/IComments/IComments";
import {getAllComments} from "../../services/api.service";
import CommentsComponent from "../../components/CommentsComponents/CommentsComponent";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect(() => {
        getAllComments().then((value:IComments[]) =>setComments(value) )
    }, []);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;