import {useEffect, useState} from "react";
import {getAllUsers, getPostsOfUserById} from '../api.service'
import {IUsers} from '../../models/IUsers/IUsers'
import {IPosts} from "../../models/IPosts/IPosts";
import UserComponent from "../user-component/user-component";
import PostsComponent from "../post-component/PostsComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        getAllUsers().then((value: IUsers[]) => setUsers([...value]))
    }, [])

    const getPosts = (userId: number) => {
        getPostsOfUserById(userId).then((posts: IPosts[]) => {
            setPosts([...posts]);
        });
    }
    return (
        <div>
            <div>
                {users.map((value) => (<UserComponent key={value.id} user={value} getPosts={getPosts}/>))}
            </div>
            <div>
                <PostsComponent posts={posts} />
            </div>
        </div>

    )
}
export default UsersComponent;
