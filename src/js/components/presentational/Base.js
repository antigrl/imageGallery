import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
${styledNormalize}

body {
  padding: 0;
  overflow: auto;
}

*,
::before,
::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  word-wrap: break-word;
}

iframe {
  border: 0;
}

img,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  fill: currentColor;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
}

button,
select,
[type='button'],
[type='reset'],
[type='submit'] {
  cursor: pointer;
}
`;

