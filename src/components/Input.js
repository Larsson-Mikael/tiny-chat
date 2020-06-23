import React from 'react';
import './Input.css';

const Input = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <input className="chat--input"></input>
    </form>
  )
}

export default Input;