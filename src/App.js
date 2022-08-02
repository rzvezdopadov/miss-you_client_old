import './App.css';
import { AppHeader } from './components/AppHeader/AppHeader';
import { AppMain } from './components/AppMain/AppMain';
import { AppFooter } from './components/AppFooter/AppFooter';
import { MobileMenu } from './components/MobileMenu/MobileMenu';

function App() {
  return (
    <div className="App">
        <AppHeader />
        <AppMain />
        <AppFooter />
        <MobileMenu />
    </div>
  );
}

export default App;
