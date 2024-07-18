import React, {useEffect, useState} from 'react';
import './App.css';
import ChildComponent from "./components/ChildComponent";
import MenuComponent from "./components/MenuComponent";


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


const App = () => {
// memo
    const [id, setId] = useState<number>(1)
console.log("app render")
    const incrementID = () => {
        setId(id => id + 1)
    }

    return (<div>
            <MenuComponent/>
            <ChildComponent id={id}/>
            <button onClick={incrementID}>Click here</button>
        </div>

    );
};

export default App;
// useMemo
// useCallback