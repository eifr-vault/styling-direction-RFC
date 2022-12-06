import classes from './App.module.css';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className={classes.root}>
      <Header size={2}>Title</Header>
      <Button>Button</Button>
    </div>
  );
}

export default App;
