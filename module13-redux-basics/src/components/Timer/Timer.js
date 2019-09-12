import React from 'react';
import { connect } from 'react-redux';
import * as timerActions from '../../redux/Timer/timerActions';
import css from './Timer.module.css';

console.log(process.env.REACT_APP_API_KEY_3);

const Timer = ({ step, value, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button
      type="button"
      className={css.button}
      onClick={() => onDecrement(step)}
    >
      &#8722;
    </button>
    <div className={css.value}>{value} minutes</div>
    <button
      type="button"
      className={css.button}
      onClick={() => onIncrement(step)}
    >
      &#43;
    </button>
  </div>
);

const mapStateToProps = state => ({
  value: state.value,
  step: state.step.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: timerStep => dispatch(timerActions.increment(timerStep)),
  onDecrement: timerStep => dispatch(timerActions.decrement(timerStep)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timer);
