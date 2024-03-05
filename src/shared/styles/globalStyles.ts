import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
:root {
       --vh: 100%;
   }


*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  width: 100%;

  //max-width: 768px;
  max-width: 480px;
  min-width: 320px;
  font-family: Pretendard;
  margin: 0 auto;
  line-height: 1;
  letter-spacing: -0.025em;
  -ms-overflow-style: none;

}
body::-webkit-scrollbar {
  display: none;
}
Link {
  cursor: pointer;
}
ul,
ol,
li,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
figure {
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  border: 0;
  vertical-align: middle;
  font-size: 0;
  max-width: 100%;
  user-select: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

select,
input,
textarea,
button {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  cursor: pointer;
}

select,
input,
button {
  vertical-align: middle;
  user-select: none;
}

b,
strong {
  font-weight: normal;
}

address,
em,
i {
  font-style: normal;
  font-weight: 100;
}

hr {
  margin: 0;
  padding: 0;
  border: none;
  display: block;
}

header,
footer,
article,
section,
aside,
nav,
main {
  display: block;
}

button,
input,
select,
textarea {
  font-size: inherit;
  font-family: Pretendard;
  margin: 0;
  border: none;
}
`;

export default GlobalStyles;
