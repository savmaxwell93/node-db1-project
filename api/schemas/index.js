const yup = require('yup');

const accountSchema = yup.object({
    name: yup
        .string()
        .typeError('name of account must be a string')
        .trim()
        .min(3, 'name of account must be between 3 and 100')
        .max(100, 'name of account must be between 3 and 100')
        .required('name and budget are required'),
    budget: yup
        .number()
        .typeError('budget of account must be a number')
        .min(0, 'budget of account is too large or too small')
        .max(1000000, 'budget of account is too large or too small')
        .required('name and budget are required')
});

module.exports = { accountSchema }