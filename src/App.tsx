import React from 'react';
import useCustomTemplateUseToggle from "./hooks/useToggle";

const App = () => {
    const {boo, toggle} = useCustomTemplateUseToggle(false)
    console.log(boo)
    return (
        <div>
            <button onClick={toggle}>
                click me
            </button>
        </div>
    )
}

export default App