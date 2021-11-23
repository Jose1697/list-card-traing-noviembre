/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.list-card {
  padding: 40px;
}

.cards-container {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin-right: 20px;
  margin-bottom: 20px;
  width: 375px;
}
`;