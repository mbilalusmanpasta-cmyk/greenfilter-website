import React from 'react';
import { Link } from 'react-router-dom'; // or use <a> for non-SPA

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leaf}>🌿</div>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subheading}>Oops! Page Not Found</h2>
      <p style={styles.description}>
        It seems the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={styles.button}>
        Back to Homepage
      </Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f6fef9',
    color: '#1b4332',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: `'Roboto', sans-serif`,
  },
  leaf: {
    fontSize: '4rem',
    marginBottom: '1rem',
    color: '#95d5b2',
  },
  heading: {
    fontSize: '6rem',
    fontWeight: 600,
    color: '#2d6a4f',
    margin: 0,
  },
  subheading: {
    fontSize: '1.8rem',
    margin: '1rem 0',
  },
  description: {
    fontSize: '1rem',
    color: '#40916c',
    marginBottom: '2rem',
    maxWidth: '400px',
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#52b788',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
  },
};

export default NotFound;