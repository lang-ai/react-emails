const fs = require('fs');
const Path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Email = require('./lib/Email').default;

const STYLE_TAG = '%STYLE%';
const CONTENT_TAG = '%CONTENT%';

/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
 */
function getFile(relativePath) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, relativePath);

    return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    })
  });
}

/**
 * Renders the React app with the passed data.
 * Returns a promise that resolves to the full email HTML.
 * @param {Object} data
 * @return {Promise.<String>}
 */
function createEmail(data) {
  return Promise.all([
    getFile('../css/inlined.css'),
    getFile('./email.html'),
  ])
    .then(([style, template]) => {
      const email = React.createElement(Email, { data });
      const content = ReactDOMServer.renderToStaticMarkup(email);

      // Replace the template tags with the content
      let email = template;
      email = email.replace(CONTENT_TAG, content);
      email = email.replace(STYLE_TAG, style);

      return email;
    });
}

module.exports = createEmail;
