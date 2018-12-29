import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';

import BodyBackground from './background'

class Selection extends React.Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <BodyBackground context={
        <h1>Hello</h1>
      } />
    );
  }
}
export default Selection;