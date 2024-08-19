import './App.css'
import Home from '../src/pages/Home/Home'
import Landing from './pages/Landing/Landing';
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6750);
  }, []);

  if (isLoading) {
    return <Landing />
  }
  return (
    <Home className='home' />
  )
}

export default App