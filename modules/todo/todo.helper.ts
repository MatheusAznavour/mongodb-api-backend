import Joi from "joi";

async function validateTodoInput(title: string, completed: boolean) {
    const schema = Joi.object({
        title: Joi.string()
            .min(3)
            .max(500)
            .required(),
        completed: Joi.boolean()
            .required()
    });
    try{
        await schema.validateAsync({title, completed});
    } catch(err){
        const error = err as Error;
        return {success: false, error: error.message.replaceAll(`"`, "") };
    }
        
   return {success: true, error: "No errors occur during validation!"};   
};
//success, error
export const todoHelper = {
    validateTodoInput
}