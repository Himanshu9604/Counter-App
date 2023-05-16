import React, { useState } from 'react';

const App = () => {
  const [temperature, setTemperature] = useState(20);

  const handleIncrement = () => {
    setTemperature(temperature + 1);
  };

  const handleDecrement = () => {
    setTemperature(temperature - 1);
  };

  let backgroundColor = 'yellow';
  if (temperature > 30 && temperature <= 50) {
    backgroundColor = 'orange';
  } else if (temperature > 50) {
    backgroundColor = 'red';
  }

  return (
    <div style={{ backgroundColor }}>
      <h1>Temperature: {temperature}°C</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;