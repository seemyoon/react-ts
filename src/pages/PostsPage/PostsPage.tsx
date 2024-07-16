import React, {useEffect, useState} from 'react';
import {getAllPosts, getAllPostWithSkip} from "../../services/api.service";
import PostsComponent from "../../components/PostsComponents/PostsComponent";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import {IPostsDummyJSON} from "../../models/IPosts/IPostsDummyJSON/IPostsDummyJSON";
import styles from "../CommentsPage/CommentsComponentStyles.module.css";

const PostsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: "1"})
    let page = searchParams.get("page");

    const [posts, setPosts] = useState<IPostsDummyJSON[]>([])
    useEffect(() => {
        let skip;
        if (page) {
            skip = Number(page) * 30 - 30;
            getAllPostWithSkip(skip).then((value: IPostsDummyJSON[]) => setPosts(value))
        } else {
            getAllPosts().then((value: IPostsDummyJSON[]) => setPosts(value))
        }

    }, [page]);
    return (
        <div className={styles.container}>
            <PostsComponent posts={posts}/>
            <PaginationComponent/>
        </div>
    );
};

export default PostsPage;