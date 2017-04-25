const fs = require('fs');

const fetch = require('node-fetch');

/**
 * You can also install the package as a module and require it.
 *
 * For example in our production server, we have a repository will all the
 * emails layouts created with this same tecnique.
 * The package name is `@sentisis/emails` and then we required it as follows:
 *
 *     const createEmail = require('@sentisis/emails');
 *
 * In this case, for the example to work, we first need to run `npm run build`
 * to generated the transpiled react files.
 */
const createEmail = require('../server/createEmail');

function getWeatherInMadrid() {
  return fetch('https://www.metaweather.com/api/location/766273/')
    .then(res => res.json())
    .then((res) => {
      const currentWeather = res.consolidated_weather[0];

      return {
        abbr: currentWeather.weather_state_abbr,
        name: currentWeather.weather_state_name,
      };
    })
}

function saveEmail(email) {
  return new Promise((resolve, reject) => {
    fs.write('weather.html', email, 'utf8', (err) => {
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

