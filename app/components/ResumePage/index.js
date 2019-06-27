/**
 *
 * ResumePage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import Resume from 'components/Resume/Loadable';
import messages from './messages';

export default function ResumePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Resume | Ian T. Small</title>
        <meta name="description" content="Resume of Ian T. Small" />
      </Helmet>
      <Container>
        <Row>
          <Col xs={12}>
            <div id="alert" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Jumbotron id="viewport" className="modal-container">
              <h1>
                <FormattedMessage {...messages.header} />
              </h1>
              <Resume />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
