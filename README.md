# joi-mobile-number

Leverages [google/libphonenumber](https://www.npmjs.com/package/google-libphonenumber) and wrapped it in Joi to validate mobile numbers

## Installation

`$ npm i joi-mobile-number`

## Usage

```
const mobileNumberSchema = require('joi-mobile-number');

const schema = {
  mobile_number: mobileNumberSchema.string().mobileNumber('PH')
}

```

