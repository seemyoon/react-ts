import React, {useEffect, useState} from 'react';
import {CarService} from "../service/api.service";
import CarsComponent from "../Components/CarsComponent";
import PaginationComponent from "../Components/PaginationComponent";
import {ICarPaginatedModel} from "../model/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {
    const [query, setQuery] = useSearchParams({page: "1"})
    const [cars, setCars] = useState<ICarPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })
    useEffect(() => {
        CarService.getAll(query.get("page") || "1").then(value => {
            if (value) {
                setCars(value);
            }
        })
    }, []);
    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case "next":
                setQuery({...cars.next})
                break
            case "prev":
                setQuery({...cars.prev})
                break
        }
    }
    console.log(cars.items)
    return (
        <div>
            <CarsComponent cars={cars.items}/>
            <PaginationComponent changePage={changePage} next={cars.next} prev={cars.prev}/>
        </div>
    );
};

export default CarsPage;