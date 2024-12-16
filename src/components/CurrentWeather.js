import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.city}>{data.city}, {data.country}</h2>
      <p style={styles.temp}>{data.temp}°C</p>
      <p style={styles.condition}>{data.condition}</p>
      <div style={styles.details}>
        <p>Sunset: {data.sunset}</p>
        <p>Time: {data.time}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    margin: '10px auto',
    padding: '15px',
    width: '90%',
    maxWidth: '500px',
    backgroundColor: '#EAF2F8',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  city: {
    fontSize: '1.5rem',
    margin: '5px 0',
    color: '#333',
  },
  temp: {
    fontSize: '2rem',
    margin: '10px 0',
    color: '#4A90E2',
  },
  condition: {
    fontSize: '1.2rem',
    color: '#666',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
    fontSize: '0.9rem',
  },
};

export default CurrentWeather;
