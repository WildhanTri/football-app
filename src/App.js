import './App.css';
import { Provider } from './stores/provider';
import AppRoute from './AppRoute';

function App() {
  return (
    <div className="App">
      <Provider>
        <AppRoute>
        </AppRoute>
      </Provider>
    </div>
  );
}

export default App;
