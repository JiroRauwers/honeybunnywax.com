import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  body {
    font-size: 16px;
    background-color: white;
    overflow-x: hidden;

    min-height: 100vh;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  input,
  textarea,
  button,
  p {
    all: unset;
  }

  button {
  cursor: pointer;
  }


  a {
  color: inherit;
  text-decoration: none;
  }
`;

export default GlobalStyles;
