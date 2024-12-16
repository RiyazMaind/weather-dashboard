import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) onSearch(input);
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Weather App</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#4A90E2',
    color: '#fff',
  },
  title: {
    fontSize: '1.8rem',
    margin: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    width: '90%',
    maxWidth: '400px',
  },
  input: {
    flexGrow: 1,
    padding: '8px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
  },
  button: {
    padding: '8px 12px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Header;
