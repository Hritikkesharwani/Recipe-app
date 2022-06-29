import React from 'react';
import './instruction.css';

export default function Instruction(props) {
  return <div className="container-instruct" ><div><h2>Instructions :- </h2></div>
  <div><h5>{props.data === undefined ? 'not found' : props.data.strInstructions}</h5></div>

  </div>;
}
