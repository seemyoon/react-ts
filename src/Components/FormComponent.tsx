import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthUserData} from "../model/IAuthUserData";
import {authService} from "../service/api.service";

const FormComponent = () => {

    const {register, handleSubmit} = useForm<IAuthUserData>({
        defaultValues: {
            username: "userAS1", password: "P@$$word1"
        }
    })
    const [authState, setAuthState] = useState(false)
    const authenticate = async (formData: IAuthUserData) => {
        const isAuth = await authService.authentication(formData)
        return setAuthState(isAuth)
    }
    return (
        <div>
            {authState ? (<div>OK</div>) : (<div>NOT OK</div>)}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} {...register("username")}></input>
                <input type={"text"} {...register("password")}></input>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;