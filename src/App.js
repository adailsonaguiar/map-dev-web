import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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
    /*   setTimeout(() => {
      setLatitude(3333);
    }, 3000); */
  }, []);

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input name='github_username' id='github-username' required />
          </div>
          <div className='input-block'>
            <label htmlFor='stacks'>Digite as stacks</label>
            <input name='stacks' id='stacks' required />
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
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars2.githubusercontent.com/u/19656546?s=400&u=86d34f06878b088e8cce446f103a41feb092ffc8&v=4'
                alt='adailsonaguiar'
              />
              <div className='user-info'>
                <strong>Adailson adailsonaguiar</strong>
                <span>Angular, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Minha Bio I study information systems.</p>
            <a href='https://github.com/adailsonaguiar'>
              Acessar perfil no Github
            </a>
          </li>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars2.githubusercontent.com/u/19656546?s=400&u=86d34f06878b088e8cce446f103a41feb092ffc8&v=4'
                alt='adailsonaguiar'
              />
              <div className='user-info'>
                <strong>Adailson adailsonaguiar</strong>
                <span>Angular, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Minha Bio I study information systems.</p>
            <a href='https://github.com/adailsonaguiar'>
              Acessar perfil no Github
            </a>
          </li>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars2.githubusercontent.com/u/19656546?s=400&u=86d34f06878b088e8cce446f103a41feb092ffc8&v=4'
                alt='adailsonaguiar'
              />
              <div className='user-info'>
                <strong>Adailson adailsonaguiar</strong>
                <span>Angular, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Minha Bio I study information systems.</p>
            <a href='https://github.com/adailsonaguiar'>
              Acessar perfil no Github
            </a>
          </li>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars2.githubusercontent.com/u/19656546?s=400&u=86d34f06878b088e8cce446f103a41feb092ffc8&v=4'
                alt='adailsonaguiar'
              />
              <div className='user-info'>
                <strong>Adailson adailsonaguiar</strong>
                <span>Angular, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Minha Bio I study information systems.</p>
            <a href='https://github.com/adailsonaguiar'>
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
