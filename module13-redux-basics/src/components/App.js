import React from 'react';
import Timer from './Timer/Timer';
import StepSelector from './StepSelector/StepSelector';

console.log(process.env);

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const App = () => (
  <div style={containerStyle}>
    <Timer />
    <StepSelector />
  </div>
);

export default App;
