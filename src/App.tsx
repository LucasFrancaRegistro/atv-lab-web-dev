import React from 'react';
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
