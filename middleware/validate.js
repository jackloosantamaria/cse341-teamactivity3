const validateData = require('../helpers/validate');

const validateContact = (req, res, next) => {
    const rules = {
        firstName: 'required | string',
        lastName: 'required | string',
        email: 'required | email',
        favoriteColor: 'string',
        birthday: 'string'
    };

    const {isValid, errors} = validateData(req.body, rules);

    if (!isValid){
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors
        });
    }

    next();
};

module.exports = { validateContact };