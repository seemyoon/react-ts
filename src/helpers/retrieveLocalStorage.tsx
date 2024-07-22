const retrieveLocalStorage = <T, >(key: string) => {
    const pairParse = localStorage.getItem(key) || ""
    if (!pairParse) {
        return {} as T
    }
    const pair = JSON.parse(pairParse)
    return pair as T
}
export {retrieveLocalStorage}