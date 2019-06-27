/**
 *
 * MenuView
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import messages from './messages';

const MenuView = ({ onComingSoonClick }) => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top" collapseOnSelect>
    <Container>
      <Navbar.Brand>
        <FormattedMessage {...messages.brand} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Text>
          <FormattedMessage {...messages.project} />
        </Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavItem>
            <LinkContainer to="/resume/">
              <Nav.Link href="/resume/">
                <FormattedMessage {...messages.resume} />
              </Nav.Link>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <Nav.Link href="#comingSoon" onSelect={onComingSoonClick}>
              <FormattedMessage {...messages.comingSoon} />
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

MenuView.propTypes = {
  onComingSoonClick: PropTypes.func.isRequired,
};

export default memo(MenuView);
