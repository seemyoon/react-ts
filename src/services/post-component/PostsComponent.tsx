import {IPosts} from "../../model/IPosts/IPosts";
import React, {Component} from 'react';

type IPostsProps = {
    posts: IPosts[];
}
type Props = {
    posts: IPosts[];
}

class PostsComponent extends Component<Props, IPostsProps> {
    constructor(props: Props) {
        super(props)
        this.state = {
            posts: this.props.posts
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.posts !== this.props.posts) {
            this.setState({
                posts: this.props.posts
            });
        }
    }

    render() {
        // this.state.posts.map((value) => console.log(value))
        return (
            <ul>
                {this.state.posts.map((value) => <li key={value.id}>{value.userId}: {value.body}</li>)}
            </ul>
        );
    }
}

export default PostsComponent;
