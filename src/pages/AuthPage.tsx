import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IUserData} from "../model/IUserData";
import {AuthService} from "../service/api.service";

const AuthPage = () => {
    const {register, handleSubmit} = useForm<IUserData>()
    const [isAuthState, setIsAuthState] = useState(false)
    const authenticate = async (formData: IUserData) => {
        const isAuth = await AuthService.authentication(formData)
        setIsAuthState(isAuth)
    }
    return (
        <div>
            {isAuthState ? (<div>OK</div>) : (<div>NOT OK</div>)}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} {...register("username")}></input>
                <input type={"text"} {...register("password")}></input>
                <button>login</button>
            </form>
        </div>
    );
};

export default AuthPage;