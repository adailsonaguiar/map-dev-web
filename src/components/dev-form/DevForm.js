import React, { useState, useEffect } from 'react';
import './styles.css';

const DevForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [stacks, setStacks] = useState('');

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
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await onSubmit({
      github_username,
      stacks,
      latitude,
      longitude
    });
    setGithubUsername('');
    setStacks('');
  };

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleSubmit}>
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
  );
};

export default DevForm;
