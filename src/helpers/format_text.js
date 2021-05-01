import React from 'react';

export default text => {
    if (typeof text !== 'string') {
      return text;
    }
  
    return text.split('\n').map(str => str && <h3>{str}</h3>);
  };