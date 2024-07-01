import React from 'react';
import useCustomFetch from './hooks/useFetchUsers'


const App = () => {
    const data = useCustomFetch<{ id: number, name: string }>("/users");
    return (
        <>
            {
                data.map(value => <div key={value.id}>{value.name}</div>)
            }
        </>
    )
}

export default App