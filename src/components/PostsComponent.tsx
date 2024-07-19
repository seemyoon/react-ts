import React, {FC} from 'react';
import withFetch from "../hoc/withFetch";

const PostsComponent: FC<any> = ({items}) => {
    console.log(items)
    return (
        <div>

        </div>
    );
};

export default withFetch(PostsComponent, "/posts");