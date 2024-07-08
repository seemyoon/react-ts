import {IPosts} from "../../models/IPosts/IPosts";
import {FC} from "react";

type IPostsProps = {
    posts: IPosts[];
}

const PostsComponent: FC<IPostsProps> = ({posts}) => {
    posts.map((value, index) => console.log(value))
    return (
        <ul>
            {
                posts.map((value) => <li key={value.id}>{value.userId}: {value.body}</li>)
            }
        </ul>
    );
}
export default PostsComponent;