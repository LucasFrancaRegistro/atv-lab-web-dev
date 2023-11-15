import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Rotas from './routes/Routes';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
