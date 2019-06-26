/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import Menu from 'containers/Menu/Loadable';

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hex in React Redux</title>
        <meta name="description" content="Portfolio of Ian T. Small" />
      </Helmet>
      <Container>
        <Row>
          <Col xs={12}>
            <Menu />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div id="alert" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Jumbotron id="viewport" className="modal-container">
              <h1>More Content Coming Soon</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
