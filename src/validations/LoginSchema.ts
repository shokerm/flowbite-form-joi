import Joi from "joi";

const REGEX_PATTERN = /((?=.*[A-z]{1})(?=.*[a-z]{1}))(?=.*\d{1})(?=.*[!@#$%^&*-]{1}).{8,20}/
export const LoginScheam = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().ruleset.pattern(REGEX_PATTERN).rule({
        message: "Password must be at least 8-20 characters "
    })
});