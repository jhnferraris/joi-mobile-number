const Joi = require('@hapi/joi');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

module.exports = Joi.extend(joi => ({
  base: joi.string(),
  name: 'string',
  language: {
    mobileNumber: 'did not seem to be a mobile number.'
  },
  rules: [
    {
      name: 'mobileNumber',
      params: {
        countryCode: joi.string().required()
      },
      validate(params, value, state, options) {
        try {
          const number = phoneUtil.parseAndKeepRawInput(value, params.countryCode);
          // getNumberType === 1 means it is a Mobile Number
          // https://github.com/ruimarinho/google-libphonenumber/blob/master/src/phonenumberutil.js#L916
          if (!phoneUtil.isValidNumber(number) || phoneUtil.getNumberType(number) !== 1) {
            return this.createError('string.mobileNumber', { v: value }, state, options);
          }
          return value;
        } catch (e) {
          return this.createError('string.mobileNumber', { v: value }, state, options);
        }
      }
    }
  ]
}));
