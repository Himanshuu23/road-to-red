import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './styles/globals.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from '@material-tailwind/react';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <main className="flex">
            <Sidebar />
            <Router />
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;