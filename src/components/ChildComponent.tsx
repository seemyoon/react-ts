import React, {FC, useEffect, useState} from 'react';

interface IProps {
    id: number
}

interface IState {
    userId: number
    id: number
    title: string
    body: string
}

const ChildComponent: FC<IProps> = ({id}) => {
    console.log("Child render")
    const [user, setUser] = useState<IState[]>([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(response => response.json())
            .then(data => setUser(data))
        console.log("useEffect render")
    }, [id]);
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default ChildComponent;