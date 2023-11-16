import Rotas from './routes/Routes';
import { Provider } from './contexts/contexto';

function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}

export default App;
