import React, {useEffect, useState} from 'react';
import {carService} from "../service/api.service";
import CarsComponent from "../Components/CarsComponent";
import {useSearchParams} from "react-router-dom";
import {ICarPaginatedModel} from "../model/ICarPaginatedModel";
import PaginationComponent from "../Components/PaginationComponent";

const CarsPage = () => {

    const [query, setQuery] = useSearchParams()
    const [carPaginatedModel, setCarPaginatedModel] = useState<ICarPaginatedModel>({
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0,
        items: [],
    })
    useEffect(() => {
        carService.getAllCars(query.get("page") || "1").then((value) => {
            if (value) {
                setCarPaginatedModel(value)
            }
        })
    }, [query]);
    return (
        <div>
            <CarsComponent cars={carPaginatedModel.items}/>
            <PaginationComponent next={carPaginatedModel.next} prev={carPaginatedModel.prev}/>
        </div>
    );
};

export default CarsPage;