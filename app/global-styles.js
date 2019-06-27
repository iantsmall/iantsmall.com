import { createGlobalStyle } from 'styled-components';
// import Background from 'images/bg.jpg';
import Background from '!file-loader?name=Background!images/bg.jpg';

const GlobalStyle = createGlobalStyle`
.modal-container {
  position: relative;
}
.modal-container .modal, .modal-container .modal-backdrop {
  position: absolute;
}
* {
	font-family: 'Montserrat', sans-serif;
}

body {
	width: 100%;
	margin: 0px;
	background-image: url(${Background});
	background-repeat: repeat-y no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
}

.icons>a {
	text-decoration: none;
	color: darkgray;
}

.location>a {
	text-decoration: none;
	color: white;
}

.location:hover {
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Montserrat',sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
