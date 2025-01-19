const validateData = (body, rules) =>{
    const errors = {};
    let isValid = true;

    Object.keys(rules).forEach((field) =>{
        const rule = rules[field];
        const value = body[field];

        if (rule.includes('required') && (!value || value.trim() === '')) {
            isValid = false;
            errors[field] = `${field} is required.`;
        }

        if (rule.includes('email') && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
            isValid = false;
            errors[field] = `${field} must be a valid email.`;
        }
    });

    return {isValid, errors};
};

module.exports = validateData;