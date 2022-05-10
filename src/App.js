import './App.css';
import HomePage from './components/HomePage';
import Trainings from './components/Trainings';
import Customers from './components/Customers';
import {NavBar} from "./components/Navbar";
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {
    const [value, setValue] = useState('HomePage');
    const handleTabChange = (event, value) => {
        setValue(value);
    };

    return (
        
    
      <div className="App">

        <React.Fragment>
            <NavBar/>
        </React.Fragment>
        
        
          <Tabs value={value} onChange={handleTabChange}>
              <Tab value="HomePage" label="Home" />
              <Tab value="customers" label="Customers" />
              <Tab value="trainings" label="Trainings" />
          </Tabs>
          {value === 'HomePage' && <HomePage />}
          {value === 'customers' && <Customers />}
          {value === 'trainings' && <Trainings />}
          
          
      </div>);
  }
  
  
  
