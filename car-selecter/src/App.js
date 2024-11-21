import { useState } from 'react';

function App() {
  const carList = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
  const colorList = ['Red', 'Blue', 'Green', 'Black', 'White'];

  const [selectedCar, setSelectedCar] = useState({ 
    car: carList[0], 
    color: colorList[0] 
  });

  const handleCarChange = (event) => {
    setSelectedCar(prevState => {
      return {
        ...prevState,
        car: event.target.value
      }
    });
  };

  const handleColorChange = (event) => {
    setSelectedCar(prevState => {
      return {
        ...prevState,
        color: event.target.value
      }
    });
  };

  return (
    <div className="container">
      <div>
        <label>Select Car: </label>
        <select value={selectedCar.car} onChange={handleCarChange}>
          {carList.map(car => (
            <option key={car} value={car}>{car}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label>Select Color: </label>
        <select value={selectedCar.color} onChange={handleColorChange}>
          {colorList.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      <p>
        You selected a {selectedCar.color} {selectedCar.car}
      </p>
    </div>
  );
}

export default App;