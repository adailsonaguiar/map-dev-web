import React from 'react';
import './styles.css';

const DevItem = ({ dev }) => {
  return (
    <li className='dev-item'>
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
  );
};

export default DevItem;
