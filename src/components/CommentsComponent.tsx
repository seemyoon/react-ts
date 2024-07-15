import React, {FC} from 'react';
import {IComments} from "../models/IComments/IComments";
interface IProps{
    comments: IComments[];
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            
        </div>
    );
};

export default CommentsComponent;