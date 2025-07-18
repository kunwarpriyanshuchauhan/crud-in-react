import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

function Subpage1() {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      height: '100vh',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '20px',
      color: '#333',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    link: {
      display: 'block',
      padding: '12px 16px',
      marginBottom: '10px',
      borderRadius: '8px',
      textDecoration: 'none',
      color: '#333',
      backgroundColor: '#e0e0e0',
      fontWeight: '500',
      transition: 'all 0.3s ease',
    },
    activeLink: {
      backgroundColor: '#4f46e5', // Indigo
      color: '#fff',
    },
  };

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: ' About', path: 'about' },
    { label: ' Services', path: 'services' },
    { label: ' Contact', path: 'contact' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Navigation</h2>
      <ul style={styles.list}>
        {navItems.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subpage1;
