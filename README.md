# joi-mobile-number

## Usage

`$ npm i joi-mobile-number`


```
const mobileNumberSchema = require('joi-mobile-number');

const schema = {
  phone: phoneNumberSchema.string().mobileNumber('PH')
}

```

