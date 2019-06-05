/*
 * MenuView Messages
 *
 * This contains all the text for the MenuView component.
 */
// import React from 'react';
import { defineMessages } from 'react-intl';

export const scope = 'app.components.MenuView';

export default defineMessages({
  brand: {
    id: `${scope}.header`,
    defaultMessage: 'Ian T. Small',
  },
  project: {
    id: `${scope}.project`,
    defaultMessage: 'Fullstack Software Engineer',
  },
  comingSoon: {
    id: `${scope}.comingSoon`,
    defaultMessage: 'Coming Soon',
  },
});
