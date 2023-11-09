import React from 'react';
import GetMegaRes from './services/api';
import { Provider } from './contexts/contexto';
import Principal from './pages/Principal';


function App() {
  return (
    <Provider>
      <Principal />
    </Provider>
  );
}

export default App;
