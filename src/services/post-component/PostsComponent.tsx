import {IPosts} from "../../models/IPosts/IPosts";
import {FC} from "react";

type IPostsProps = {
    posts: IPosts[];
}

const PostsComponent: FC<IPostsProps> = ({ posts }) => {
    return (
        <ul>
            {posts.map(value => (
                <li key={value.id}>{value.id}: {value.title}</li>
            ))}
        </ul>
    );
}
export default PostsComponent;