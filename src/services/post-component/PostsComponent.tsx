import {IPosts} from "../../model/IPosts/IPosts";
import React, {Component} from 'react';

type IPostsProps = {
    posts: IPosts[];
}
type Props = {
    posts: IPosts[];
}
class PostsComponent extends Component< Props, IPostsProps> {
    constructor(props: Props) {
        super(props)
        this.state = {
            posts: props.posts
        };
    }
    render() {
        return (
            <ul>
                {this.state.posts.map((value) => <li key={value.id}>{value.userId}: {value.body}</li>)}
            </ul>
        );
    }
}

export default PostsComponent;
