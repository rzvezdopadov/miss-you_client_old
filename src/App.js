import './App.css';
import { AppHeader } from './components/AppHeader/AppHeader';
import { AppMain } from './components/AppMain/AppMain';
import { AppFooter } from './components/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

export default App;
