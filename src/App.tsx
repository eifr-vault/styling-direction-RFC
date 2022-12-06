import './App.css';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header size={2}>test</Header>
      <Button>title</Button>
    </div>
  );
}

export default App;
