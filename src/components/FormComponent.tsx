import React from 'react';
import {useForm} from "react-hook-form";
import {postUsers} from "../services/api.service";
import {FormType} from "../models/FormType"
import userValidator from "../validators/user.validator";
import {joiResolver} from "@hookform/resolvers/joi";

const FormComponent = () => {
    const {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<FormType>({
        mode: "all", resolver:
            joiResolver(userValidator)
    },)
    const formSubmitHandler = (data: FormType) => {
        postUsers(data).then(res => console.log(res));
    };
    return (<div>
            {errors.userId && <div>{errors.userId.message}</div>}
            {errors.title && <div>{errors.title.message}</div>}
            {errors.body && <div>{errors.body.message}</div>}
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <input type="number" {...register("userId")}></input>
                <input type="text" {...register("title")}></input>
                <input type="text" {...register("body")}></input>
                <button disabled={!isValid}>Send</button>
            </form>

        </div>
    );
};

export default FormComponent;