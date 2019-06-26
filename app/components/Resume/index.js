/**
 *
 * Resume
 *
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import messages from './messages';

const RESUME_SRC =
  'https://docs.google.com/a/thekeepstudios.com/document/d/e/' +
  '2PACX-1vR5HbP7EGGTv8Z9uRjwBi6SQoreIP4CC04gpZaIBqgTYagsUdYxqf4Fe8ZO2DaSYcvqzrd4rscN9s98' +
  '/pub?embedded=true';
const DOWNLOAD_LINK =
  'https://drive.google.com/file/d/' +
  '1d6vw4KLMyQgbFWOkpVyZR47l80mSSYSp' +
  '/view?usp=sharing';

const DocFrame = styled.iframe`
  width: 100%;
  min-height: 50vh;
`;

const DownloadButton = styled(Button)`
  margin-bottom 10px;
`;

function Resume() {
  return (
    <div>
      <DownloadButton href={DOWNLOAD_LINK}>
        <FormattedMessage {...messages.link} />
      </DownloadButton>
      <DocFrame src={RESUME_SRC} />
    </div>
  );
}

Resume.propTypes = {};

export default memo(Resume);
