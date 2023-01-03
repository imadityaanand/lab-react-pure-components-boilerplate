import './App.css';
import PureCounter from './components/PureComponent';
import SimpleCounter from './components/SimpleCounter';

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <PureCounter />
    </div>
  );
}

export default App;
