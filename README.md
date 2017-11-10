# Generating Emails with React

> This is an example project you can use to generate emails with React.
> You can start by reading the article [here](https://building.lang.ai/how-to-build-emails-with-react-fcf941b125d1).


### Example

To provide an example as starting point, this project generates a weather
forecast by using the [MetaWeather API][metaweather].

To generate the example email:

```
$ npm install
$ npm run build
$ node example/weather.js
```

The result html will be saved in the working directory. Here is what it looks
like:

![Email preview](https://s3-eu-west-1.amazonaws.com/sentisis-images/github_public/react-emails/email-preview.png)


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
    // Send the HTML with your email service of choice
  });
```

- - - - - - - - - -

[![LangAI](https://s3-eu-west-1.amazonaws.com/langai-public/github/logo-small.png)][langai]

**Built with ❤️ by Lang.ai**

 [article]: https://building.sentisis.com/
 [langai]: https://building.lang.ai/
 [react-create-app]: https://github.com/facebookincubator/create-react-app
 [react-create-app-guide]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
 [metaweather]: https://www.metaweather.com/api/


