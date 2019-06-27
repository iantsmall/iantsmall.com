/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import Menu from 'containers/Menu/Loadable';
import Resume from 'components/Resume/Loadable';
import messages from './messages';

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ian T. Small</title>
        <meta name="description" content="Portfolio of Ian T. Small" />
      </Helmet>
      <Menu />
      <Container>
        <Row>
          <Col xs={12}>
            <div id="alert" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Jumbotron id="viewport" className="modal-container">
              <h2>
                <FormattedMessage {...messages.resumeheader} />
              </h2>
              <Resume />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
