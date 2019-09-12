import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as timerActions from '../../redux/Timer/timerActions';
import css from './Timer.module.css';
import * as timerSelectors from '../../redux/Timer/timerSelectors';
import withRenderLog from '../hoc/withRenderLog';

// console.log(process.env.REACT_APP_API_KEY_3);

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

const mapStateToProps = store => ({
  value: timerSelectors.getValue(store),
  step: timerSelectors.getStep(store),
});

const mapDispatchToProps = dispatch => ({
  onIncrement: timerStep => dispatch(timerActions.increment(timerStep)),
  onDecrement: timerStep => dispatch(timerActions.decrement(timerStep)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRenderLog,
)(Timer);
