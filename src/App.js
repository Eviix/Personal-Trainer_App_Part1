import './App.css';
import HomePage from './pages/HomePage';
import Training from './pages/Training';
import Customer from './pages/Customer';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {
    const [value, setValue] = useState('HomePage');
    const handleTabChange = (event, value) => {
        setValue(value);
    };

    return (
      <div className="App">
          <Tabs value={value} onChange={handleTabChange}>
              <Tab value="HomePage" label="Home" />
              <Tab value="customer" label="Customer" />
              <Tab value="training" label="Training" />
          </Tabs>
          {value === 'HomePage' && <HomePage />}
          {value === 'customer' && <Customer />}
          {value === 'training' && <Training />}
      </div>);
  }
  
  export default App;
