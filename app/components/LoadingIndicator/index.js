/**
 *
 * LoadingIndicator
 *
 */

import React, { memo } from 'react';
import { Spinner } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function LoadingIndicator() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">
        <FormattedMessage {...messages.loading} />
      </span>
    </Spinner>
  );
}

LoadingIndicator.propTypes = {};

export default memo(LoadingIndicator);
