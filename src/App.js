import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Main.css';
import api from './services/api';
import DevItem from './components/dev-item/DevItem';
import DevForm from './components/dev-form/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    getDevs();
  }, []);

  const getDevs = async () => {
    const response = await api.get('/devs');
    setDevs(response.data);
  };

  const addDev = async data => {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  };

  return (
    <div id='app'>
      <DevForm onSubmit={addDev} />
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
