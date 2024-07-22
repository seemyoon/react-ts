import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.service";

const FormComponent = () => {

    const {register, handleSubmit} = useForm<AuthDataModel>()
    const [isAuthState, setIsAuthState] = useState<boolean>(false)
    const authenticate = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
        console.log(isAuth)
    }

    return (
        <div>
            {isAuthState ? (<div>ok</div>) : (<div>not ok</div>)}
            <form onClick={handleSubmit(authenticate)}>
                <input type={"text"} {...register("username")}></input>
                <input type={"text"} {...register("password")}></input>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;