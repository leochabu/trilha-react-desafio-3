import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
  }

  form .error-message{
    color: darkred !important;
    margin-bottom: 10px;
    margin-top: -10px;
  }
`