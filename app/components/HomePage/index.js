/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import PortraitImage from 'components/PortraitImage/Loadable';
import messages from './messages';

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ian T. Small</title>
        <meta name="description" content="Portfolio of Ian T. Small" />
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
                <FormattedMessage {...messages.title} />
              </h1>
              <Row>
                <Col lg={{ order: 2, span: 7 }} xs={{ order: 1, span: 12 }}>
                  <h2>
                    <FormattedMessage {...messages.header} />
                  </h2>
                  <PortraitImage src="https://www.thekeepstudios.com/wp-content/uploads/2018/07/ian_office_cropped-206x300.jpg" />
                  <FormattedMessage {...messages.welcome} />
                </Col>
                <Col lg={{ order: 1, span: 3 }} xs={{ order: 2, span: 12 }}>
                  <center>
                    <ButtonGroup size="lg" vertical>
                      <LinkContainer to="/portfolio/">
                        <Button>Portfolio</Button>
                      </LinkContainer>
                      <Button href="https://www.thekeepstudios.com/about-us/iantsmall/">
                        TKS&nbsp;Profile
                      </Button>
                      <LinkContainer to="/resume/">
                        <Button>Resume</Button>
                      </LinkContainer>
                    </ButtonGroup>
                  </center>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
