const fs = require('fs');

const fetch = require('node-fetch');

/**
 * You can also install the package as a module and require it.
 *
 * For example in our production server, we have a repository with all the
 * emails layouts created with this same tecnique.
 * The package name is `@sentisis/emails` and then we simply require it:
 *
 *     const createEmail = require('@sentisis/emails');
 *
 * The package contains the files already transpiled with babel.
 */
const createEmail = require('../server/createEmail');

function getWeatherInMadrid() {
  return fetch('https://www.metaweather.com/api/location/766273/')
    .then(res => res.json())
    .then((res) => {
      return res.consolidated_weather.map(w => ({
        date: w.applicable_date,
        name: w.weather_state_name,
        abbr: w.weather_state_abbr,
        tMax: w.max_temp,
        tMin: w.min_temp,
      }));
    });
}

function saveEmail(email) {
  return new Promise((resolve, reject) => {
    fs.writeFile('weather.html', email, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
}

getWeatherInMadrid()
  .then((weather) => {
    return createEmail({ weather, city: 'Madrid' });
  })
  .then((email) => {
    // Here is where you would send the email to someone using your service of
    // choiche.
    // For this example we are just writing the result to disk.
    return saveEmail(email);
  });

