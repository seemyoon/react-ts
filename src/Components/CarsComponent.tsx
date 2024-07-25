import React, {FC} from 'react';
import {ICarWithAuth} from "../model/ICarWithAuth";

interface IProps {
    cars: ICarWithAuth[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map(car  => (<div key={car.id}>{car.brand}</div>))}
        </div>
    );
};

export default CarsComponent;