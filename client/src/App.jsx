import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './styles/globals.css';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <main className="p-4">
          <Router />
        </main>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;