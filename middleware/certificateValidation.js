const joi = require('joi');

const validateMiddleware = async (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(2).max(30).required()
    });
    try{      
        const { error, value } = await schema.validateAsync({name: req.body.name});
        
        return next();
    }catch(err){
        return res.status(500).json({message: err.details[0].message});
    }
}


module.exports = validateMiddleware;