import React, {Component} from 'react';
import UserComponent from '../user-component/UserComponent';
import {getAllUsers, getPostsOfUsers} from "../api.service"
import {IUsers} from "../../model/IUsers/IUsers";
import {IPosts} from "../../model/IPosts/IPosts";
import PostsComponent from "../post-component/PostsComponent";

type IState = {
    users: IUsers[];
    posts: IPosts[];
}

class UsersComponent extends Component <{}, IState> {

    state: IState = {
        users: [],
        posts: []
    }

    componentDidMount() {
        getAllUsers().then((value: IUsers[]) => {
            this.setState({users: value});
        })
    }

    getPosts = (userId: number) => {
        getPostsOfUsers(userId).then((value: IPosts[]) =>
            // this.setState({ posts: value })
        console.log(value)
        );

    }


    render() {
        return (
            <div>
                <div>
                    {this.state.users.map(user => <UserComponent user={user} key={user.id} getPosts={this.getPosts}/>)}
                </div>
                <div>
                    <PostsComponent posts={this.state.posts}/>
                </div>
            </div>

        );
    }
}

export {UsersComponent};