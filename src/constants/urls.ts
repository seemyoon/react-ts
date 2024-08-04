const baseUrl = "https://jsonplaceholder.typicode.com"
const urls = {
    user: {
        base: "/users",
        byId: (id: number):string => urls.user.base + `${id}`
    },
    post: {
        base: "/posts",
        byId: (id: number):string => urls.post.base + `${id}`
    }
}
export {baseUrl, urls}