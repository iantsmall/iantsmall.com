/**
 *
 * PortraitImage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: block;
  float: right;
  width: 50%;
`;
const StyledImage = styled.img`
  width: 100%;
  border-radius: 45%;
`;
function PortraitImage(props) {
  return (
    <StyledContainer>
      <StyledImage {...props} />
    </StyledContainer>
  );
}

PortraitImage.propTypes = {
  ...StyledImage.propTypes,
};

export default memo(PortraitImage);
