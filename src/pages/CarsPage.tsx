import React, {useEffect, useState} from 'react';
import {CarService} from "../service/api.service";
import CarsComponent from "../Components/CarsComponent";
import PaginationComponent from "../Components/PaginationComponent";
import {ICarPaginatedModel} from "../model/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const [carPaginatedObject, setCarPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });
    useEffect(() => {
        CarService.getAll(query.get('page') || '1').then(value => {
            if (value) {
                setCarPaginatedObject(value);
            }
        });
    }, [query]);

    const changePage = (nextOrPrev: string) => {
        switch (nextOrPrev) {
            case 'next':
                setQuery({...carPaginatedObject.next});
                break;
            case 'prev':
                setQuery({...carPaginatedObject.prev});
                break;

        }

    };
    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
            <PaginationComponent next={carPaginatedObject.next} prev={carPaginatedObject.prev} changePage={changePage}/>
        </div>
    );
};

export default CarsPage;