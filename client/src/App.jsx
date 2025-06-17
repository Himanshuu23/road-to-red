import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import './styles/globals.css';

function App() {
  const { toggle } = useTheme();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Student Progress</h1>
          <ThemeToggle onToggle={toggle} />
        </header>
        <main className="p-4">
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;