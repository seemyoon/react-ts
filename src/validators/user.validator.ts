import Joi from "joi";

const userValidator = Joi.object({
    id: Joi.number()
        .min(100)
        .messages({
            "number.base": "ID must be a number",
            "number.min": "ID must be at least 100"
        }),
    userId: Joi.number()
        .required()
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
