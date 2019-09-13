import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as timerActions from '../../redux/Timer/timerActions';
import * as timerSelectors from '../../redux/Timer/timerSelectors';

const options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
];

const getOption = value => options.find(opt => opt.value === value);

const StepSelector = ({ value, onChange }) => (
  <div style={{ width: 400 }}>
    <Select options={options} value={getOption(value)} onChange={onChange} />
  </div>
);

const mapStateToProps = state => ({
  value: timerSelectors.getStep(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: step => dispatch(timerActions.changeStep(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelector);
