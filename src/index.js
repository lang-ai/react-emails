import React from 'react';
import ReactDOM from 'react-dom';

import Email from './Email';

import './inlined.css';

/**
 * This file is not used when rendering the email on the server.
 * It's the perfect place to include mock data for development.
 */

const mockData = {
  title: 'Example email',
  name: 'Alberto',
};

ReactDOM.render(
  <Email data={mockData} />,
  document.getElementById('root')
);

