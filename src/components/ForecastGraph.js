import React from 'react';

const ForecastGraph = ({ data }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Temperature Forecast</h3>
      <div style={styles.scrollContainer}>
        <div style={styles.graph}>
          {data.map((item, index) => (
            <div key={index} style={styles.bar}>
              <p style={styles.time}>{item.time}</p>
              <div style={{ ...styles.tempBar, height: `${item.temp * 2}px` }}>
                {item.temp}°C
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
    backgroundColor: '#EAF2F8',
    borderRadius: '10px',
    margin: '10px auto',
    width: '90%',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '10px',
  },
  scrollContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  graph: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
  },
  bar: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '12vw',
    minWidth: '50px',
  },
  time: {
    marginBottom: '5px',
    fontSize: '0.8rem',
  },
  tempBar: {
    width: '100%',
    backgroundColor: '#4A90E2',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '5px',
    fontSize: '0.7rem',
    padding: '2px',
  },
};

export default ForecastGraph;

