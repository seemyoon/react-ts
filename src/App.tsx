import React from 'react';
import './App.css';
import PostsComponent from "./components/PostsComponent";

// import ChildComponent from "./components/ChildComponent";
// import MenuComponent from "./components/MenuComponent";
// import LinksComponents from "./components/LinksComponents";

// const App = () => {
//     const [value, dispatch] = useReducer((prevState: number, action: { type: string; payload: number }) => {
//         switch (action.type) {
//             case 'add':
//                 return prevState + action.payload;
//             case "remove":
//                 return prevState - action.payload;
//             default:
//                 return prevState;
//         }
//     }, 0)
//     return (
//         <div>
//             <button onClick={() => {
//                 dispatch({type: "remove", payload: 1})
//             }}>dec
//             </button>
//
//             <button onClick={() => {
//                 dispatch({type: "add", payload: 1})
//             }}>inc
//             </button>
//             <br/>
//             <h2>state: {value}</h2>
//         </div>
//     );
// }
// const App = () => {
//     // stay lifting with func + property drills
//     const [letters, setLetters] = useState("")
//     const addLetter = ()=>{
//         setLetters("A")
//     }
//     console.log(letters)
//     return (
//
//     <UserComponent letters={letters} func={addLetter} />)
// }
// export default App;

// const App = () => {
//     unsubscribe function in useEffect()
//     const [counter, setCounter] = useState(0)
//     useEffect(() => {
//         const value = setInterval(()=>{
//             console.log("any")
//         }, 1000)
//       return ()=>{
//             clearInterval(value)
//       }
//     }, [counter]);
//     return (
//         <button onClick={()=>{
//             setCounter(counter + 1)
//         }}>Click here! {counter}</button>
//     );
// };
// export default App;
// https://jsonplaceholder.typicode.com/posts/1

// const useFetch = <T, >(url: string) => {
//     const [data, setData] = useState<T[]>([])
//
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts/1" + url)
//             .then(response => response.json())
//             .then(value => setData([...value]))
//
//     }, []);
//     return data
// }
// const App = () => {
//     const res = useFetch<{ id: number, body: string }>("/comments")
//     return (
//         <div>
//             {res.map(value => (<li key={value.id}>{value.id}{value.body}</li>))}
//         </div>
//     );
// };
// export default App;

// const App = () => {
// // memo
//     const [id, setId] = useState<number>(1)
//     console.log("app render")
//     const incrementID = () => {
//         setId(id => id + 1)
//     }
//     const [link1, setLink1] = useState("asd")
//     const [link2, setLink2] = useState("zxc")
//     const [link3, setLink3] = useState("qwe")
//     const links = useMemo(() => {
//         console.log("useMemo render")
//         return [link1, link2, link3]
//     }, []);
//
//     const xxx = useCallback(() => {
//         console.log("qweasdzxc")
//         return undefined
//     }, [id]);
//     return (<div>
//         <LinksComponents links={links} xxx={xxx}/>
//         <MenuComponent/>
//         <ChildComponent id={id}/>
//         <button onClick={incrementID}>Click here</button>
//     </div>)
// }
// export default App;
// useMemo
// useCallback

const App = () => {
    return (
        <div>

        <PostsComponent/>
        </div>
    );
};

export default App;