import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [stacks, setStacks] = useState('');
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
    getDevs();
  }, []);

  const getDevs = async () => {
    const response = await api.get('/devs');
    setDevs(response.data);
  };

  const addDev = async e => {
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      stacks,
      latitude,
      longitude
    });
    setGithubUsername('');
    setStacks('');
    getDevs();
  };

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={addDev}>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input
              name='github_username'
              id='github-username'
              required
              value={github_username}
              onChange={e => {
                setGithubUsername(e.target.value);
              }}
            />
          </div>
          <div className='input-block'>
            <label htmlFor='stacks'>Digite as stacks</label>
            <input
              name='stacks'
              id='stacks'
              required
              value={stacks}
              onChange={e => {
                setStacks(e.target.value);
              }}
            />
          </div>
          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input
                type='number'
                name='latitude'
                id='latitude'
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input
                type='number'
                name='longitude'
                id='longitude'
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type='submit'>SALVAR</button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <li className='dev-item' key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.github_username} />
                <div className='user-info'>
                  <strong>{dev.name}</strong>
                  <span>{dev.stacks.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no Github
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
