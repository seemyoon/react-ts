import React, {FC, useEffect, useState} from 'react';
import {IPosts} from "../models/IPosts/IPosts";
import {getAllPostsOfUser} from "../services/api.service";
interface IProps{
    id: number
}
const PostOfUserComponent:FC<IProps> = ({id}) => {
    const [postsOfUser, setPostsOfUser] = useState<IPosts[]>([])
    useEffect(() => {
        getAllPostsOfUser(id).then((value:IPosts[]) => setPostsOfUser(value))
    }, []);
    return (
        <div>
            {
                postsOfUser.map(postOfUser => (<li key={postOfUser.id}>
                    {postOfUser.id} <br/>
                    {postOfUser.userId} <br/>
                    {postOfUser.body} <br/>
                    {postOfUser.title} <br/>
                </li>))
            }
        </div>
    );
};
export default PostOfUserComponent;