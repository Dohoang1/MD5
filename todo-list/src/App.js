import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  }

  const handleAddItem = () => {
    if (item !== '') {
      setList([...list, item]);
      setItem('');
    }
  }

  return (
    <div>
      <h1>To Do List</h1>  
      <input 
        type="text"
        value={item}
        onChange={handleChange}
        placeholder="Nhập công việc cần làm"
      />
      
      <button onClick={handleAddItem}>
        Add
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;