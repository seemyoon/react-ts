import React, {FC} from 'react';
import {IPaginationPageModel} from "../model/IPaginationPageModel";


interface IProps {
    changePage: (action: string) => void;
    next: null | IPaginationPageModel;
    prev: null | IPaginationPageModel;
}



const PaginationComponent: FC<IProps> = ({next, prev, changePage}) => {
    return (
        <div>
            <button
                onClick={() => {
                    changePage('prev');
                }}>prev
            </button>
            <button
                onClick={() => {
                    changePage('next');

                }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;