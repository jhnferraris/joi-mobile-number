# joi-phone-number

## Usage

`$ npm i joi-phone-number`


```
const phoneNumberSchema = require('joi-phone-number');

const schema = {
  phone: phoneNumberSchema.phone().isValidForRegion('PH')
}

```

