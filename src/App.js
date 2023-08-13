import './App.css';
import { ThemeProvider } from './ThemeContext';
import { LangProvider } from './LangContext';
import Container from './components/Container';

function App() {

  return (
    <LangProvider>
      <ThemeProvider>
        <Container/>
      </ThemeProvider>
    </LangProvider>
  );
}

export default App;
