/*
 * ComingSoonModal Messages
 *
 * This contains all the text for the ComingSoonModal component.
 */

import React from 'react';

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ComingSoonModal';

const features = [
  'Welcoming Page',
  'About Me Page',
  'Development Portfolio',
  'Contact Information',
];
const bugs = [];

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Coming Soon',
  },
  body: {
    id: `${scope}.body`,
    defaultMessage: '{summary} {features} {bugs}',
    values: {
      summary: <p>This is a simple road map for coming features.</p>,
      features: (
        <div id="planned-features">
          <h2>Planned Features</h2>
          <ul>
            {features.map(feature => (
              <li key={`feature_${feature}`}>{feature}</li>
            ))}
          </ul>
        </div>
      ),
      bugs: (
        <div id="bug-fixes">
          <h2>Known Bugs</h2>
          <ul>
            {bugs.map(bug => (
              <li key={`bug_${bug}`}>{bug}</li>
            ))}
          </ul>
        </div>
      ),
    },
  },
});
