import Joi from '@hapi/joi'


export default {

    registerValidate(data: Object) {

        const schema = Joi.object({
            email: Joi.string().required().min(3).max(100),
            name: Joi.string().required().min(3).max(50),
            password: Joi.string().required().min(8).max(200),
             
        })
        
        return schema.validate(data)
    },
    
    loginValidate(data: Object) {
    
        const schema = Joi.object({
            email: Joi.string().required().min(3).max(100),
            password: Joi.string().required().min(8).max(200),
             
        })
    
        return schema.validate(data)
    }
}
