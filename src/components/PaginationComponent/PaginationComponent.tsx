import React from 'react';
import {useSearchParams} from "react-router-dom";
import styles from "./PaginationComponent.module.css";

const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: "1"})
    const pageParams = Number(searchParams.get("page"))
    return (
        <div>
            <button disabled={(pageParams === 1)} className={styles.btn} onClick={() => {
                const page = Number(searchParams.get("page") || "1");
                const prevPage = (page - 1).toString()
                setSearchParams({page: prevPage})
            }}>Previous
            </button>
            <button disabled={(pageParams === 12)} className={styles.btn} onClick={() => {
                const page = Number(searchParams.get("page") || "1");
                const nextPage = (page + 1).toString()
                setSearchParams({page: nextPage})
            }}>Next
            </button>
        </div>
    );
};

export default PaginationComponent;