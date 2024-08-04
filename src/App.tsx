import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postsActions} from "./redux/slices/postSlice";

const App = () => {
    const {userSliceState: {users, isLoaded}, postSliceState: {posts}} = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postsActions.loadPosts())
    }, []);
    return (
        <div>
            {!isLoaded && (<div>is Loading...</div>)}
            {users.map(user => (<div key={user.id}>
                <h2>{user.name}</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p>
                    <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
            </div>))}
            <br/>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default App;