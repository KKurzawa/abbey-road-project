import './App.css'
import Home from '../src/pages/Home/Home'
import Landing from './pages/Landing/Landing';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <Landing />
  }
  return (
    <Home />
  )
}

export default App