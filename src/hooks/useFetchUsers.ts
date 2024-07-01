import {useEffect, useState} from "react";

const useCustomFetch = <T, >(extraUrl: string) => {
    const [users, setUsers] = useState<any[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + extraUrl)
            .then(res => res.json())
            .then(values => setUsers(values))
    }, []);
    return users
}
export default useCustomFetch;