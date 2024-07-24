const retrieveLocalStorage = <T, >(key: string) => {
    const parsePair = localStorage.getItem(key) || "";
    if (!parsePair) {
        return {} as T
    }
    const pair = JSON.parse(parsePair);
    return pair as T;
};

export default retrieveLocalStorage;