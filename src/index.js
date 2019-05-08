const Joi = require('@hapi/joi');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

module.exports = Joi.extend(joi => ({
  base: joi.string(),
  name: 'phone',
  language: {
    phone: 'needs to be a phone number.'
  },
  rules: [
    {
      name: 'isValidForRegion',
      setup(params) {
        this._flags.phone = true; // Set a flag for later use
      },
      params: {
        countryCode: joi.string().required()
      },
      validate(params, value, state, options) {
        try {
          const number = phoneUtil.parseAndKeepRawInput(value, params.countryCode);
          if (!phoneUtil.isValidNumber(number)) {
            console.log('false');
            // Generate an error, state and options need to be passed
            return this.createError('phone', { v: value }, state, options);
          }
          return value;
        } catch (e) {
          console.error(e);
          return this.createError('phone', { v: value }, state, options);
        }
      }
    }
  ]
}));
