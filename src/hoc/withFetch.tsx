import React, {FC, useEffect, useState} from 'react';

const withFetch = (Component: FC<any>, endpoint: string) => {
    return (props: any) => {
        const [item, setItem] = useState<any>([])
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/" + endpoint)
                .then(resp => resp.json())
                .then(value => setItem(value))

        }, []);
        return <Component items={item} {...props}/>
    };
};

export default withFetch;