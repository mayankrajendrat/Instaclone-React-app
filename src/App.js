import React from 'react';
import './App.css';
import PostviewContext from './contexts/PostviewContext';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <PostviewContext>
      <div className='wrapper'>
        <AppRouter />
      </div>  
    </PostviewContext>
  );
}

export default App;
