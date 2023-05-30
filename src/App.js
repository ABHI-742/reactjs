import logo from './logo.svg';
import './App.css';
import Greets from './components/greets';
import Functionss from './components/functionss';
import Mess from './components/mess';
import List from './components/list';
import Funmet from './components/funmet';

function App() {
  return (
    <div className="App">
      {/*<Greets/>*/}
      {/*<Functionss/>*/}
      <Mess/>
      <List/>
      <Funmet/>
    </div>
  );
}

export default App;
