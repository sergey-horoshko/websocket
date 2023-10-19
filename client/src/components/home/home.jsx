import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

const Home = ({ socket }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      localStorage.setItem('user', user);
      navigate('/chat');
    } else {
      alert('Введите имя');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="user">
        <h2>Вход в чат</h2>
      </label>
      <input
        id="user"
        className={styles.input}
        placeholder="Ваше имя"
        type="text"
        autoComplete="off"
        value={user}
        onChange={(e) => setUser(e.target.value)}/>
      <button className={styles.button} type="submit">Войти</button>
    </form>
  );
};

export default Home;
