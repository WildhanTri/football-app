import './App.css';
import { Provider } from './stores/provider';
import AppRoute from './AppRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

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
