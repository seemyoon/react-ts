import React, {FC} from 'react';
import {UserWithPostsType} from "../models/UserWithPostsType";

interface IProps {
    items: UserWithPostsType[]
}

const UserPostsComponents: FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map((item => (<div key={item.id}>
                    {item.name}
                    <ul>
                        {item.posts.map(post => <li>{post.title}</li>)}
                    </ul>
                </div>)))
            }
        </div>
    );
};

export default UserPostsComponents;