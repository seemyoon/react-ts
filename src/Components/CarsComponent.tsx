import React, {FC} from 'react';
import {ICarWithAuth} from "../model/ICarWithAuth";

interface IProps {
    cars: ICarWithAuth[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    {cars.forEach(value => console.log(value))}
    return (
        <div>
            {cars.map(value => (<div key={value.id}>{value.id} {value.brand} {value.price}</div>))}
        </div>
    );
};

export default CarsComponent;