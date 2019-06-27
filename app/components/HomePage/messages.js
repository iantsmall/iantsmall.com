/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
// import React from 'react';
import React from 'react';
import { defineMessages } from 'react-intl';

export const scope = 'app.components.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "It's nice to meet you",
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: "I'm Ian T Small",
  },
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: '{p1}{p2_alt}',
    values: {
      p1: (
        <p>
          Welcome to my little corner of the internet. I&apos;m a fullstack web
          developer with a decade of real world experience programming.
        </p>
      ),
      p2: (
        <p>
          That&apos;s a pretty dry description of me isn&apos;t it? If
          that&apos;s how someone introduced themselves, have been bored to
          tears.
        </p>
      ),
      p2_alt: (
        <p>
          I&apos;m transforming this site into a fun and interesting way to get
          to know more about me. Right now it&apos;s pretty plain, but you can
          visit the portfolio that I&apos;m putting together to display my
          coding work, or you can visit my TKS company profile. If you&apos;re
          interested in hiring me, then my hosted resume is ideal for you.
        </p>
      ),
    },
  },
});
