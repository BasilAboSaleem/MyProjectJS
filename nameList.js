import React from 'react';
import Name from './name.js';
import './style.css';

var NameList = props => {
  var renderName = (name, index) => (
    <Name
      name={name}
      key={name}
      removeName={props.removeName}
      index={index}
    />
  );
  var NameElements = props.names.map(renderName);
  return <main>{NameElements}</main>;
};

export default NameList;
