import {useState} from "react";

const useCustomTemplateUseToggle = (initialValue:boolean) =>{
    const [boo, setBoo] = useState<boolean>(initialValue)
    const toggle = () => {
        setBoo(!boo)
    }
    return {boo,toggle}
}
export default useCustomTemplateUseToggle;