import React from 'react';
import './style.css';
import Login from './components/Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './components/Dashboard'
export default function App() {
  const [id, setId] = useLocalStorage('id');
  return (
      id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  );
}
