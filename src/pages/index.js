import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { recaptcha_key } from 'data/config';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default () => (
	<GoogleReCaptchaProvider reCaptchaKey={recaptcha_key} >
    <Layout>
      <SEO />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
	</GoogleReCaptchaProvider>
);
