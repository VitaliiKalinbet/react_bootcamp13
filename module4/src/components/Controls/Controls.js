import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ propStep, onHandleIncrement, onHandleDecrement }) => {
  return (
    <>
      <button onClick={onHandleIncrement} type="button">
        Increment by {propStep}
      </button>
      <button onClick={onHandleDecrement} type="button">
        Decrement by {propStep}
      </button>
    </>
  );
};

Controls.propTypes = {
  propStep: PropTypes.number.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired,
};

export default Controls;
