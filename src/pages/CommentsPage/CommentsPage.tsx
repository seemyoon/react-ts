import React, {useEffect, useState} from 'react';
import {getAllComments, getAllCommentsWithSkip} from "../../services/api.service";
import CommentsComponent from "../../components/CommentsComponents/CommentsComponent";
import {ICommentsDummyJSON} from "../../models/IComments/ICommentsDummyJSON/ICommentsDummyJSON";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import styles from './CommentsComponentStyles.module.css'

const CommentsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: "1"});
    let page = searchParams.get("page");

    const [comments, setComments] = useState<ICommentsDummyJSON[]>([])
    useEffect(() => {
        let skip;
        if (page) {
            skip = Number(page) * 30 - 30;
            getAllCommentsWithSkip(skip).then((value: ICommentsDummyJSON[]) => setComments(value))
        } else {
            getAllComments().then((value: ICommentsDummyJSON[]) => setComments(value))
        }

    }, [page]);
    return (
        <div className={styles.container}>
            <CommentsComponent comments={comments}/>
            <PaginationComponent/>
        </div>
    );
};

export default CommentsPage;