import Joi from "joi";

const userValidator = Joi.object({
    userId: Joi.number()
        .required()
        .max(10)
        .messages({
            "number.base": "User ID must be a number",
            "any.required": "User ID is required"
        }),
    title: Joi.string()
        .required()
        .messages({
            "string.base": "Title must be a string",
            "any.required": "Title is required"
        }),
    body: Joi.string()
        .required()
        .messages({
            "string.base": "Body must be a string",
            "any.required": "Body is required"
        })
})
export default userValidator;
