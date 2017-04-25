# Emails tempaltes with react

This is an example project. Read the article [here][article] to understand what's
going on.


### Development

This project was bootstrapped with [Create React App][react-create-app].
 See the development guide [here][react-create-app-guide].


### Creating the email

To create the email, simply import the module and call the function with the
data. It returns a promise that resolves to the full HTML template as a string.

```js
const createEmail = require('react-emails-example');

const data = { 
  name: 'Alberto',
  title: 'Demo email',
};

createEmail(data)
  .then((html) => {
    // Send the HTML with your email service of choiche
  });
```


 [article]: https://building.sentisis.com
 [react-create-app]: https://github.com/facebookincubator/create-react-app
 [react-create-app-guide]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md

