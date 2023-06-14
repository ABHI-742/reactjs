import logo from './logo.svg';
import './App.css';
import Greets from './components/greets';
import Functionss from './components/functionss';
import Mess from './components/mess';
import List from './components/list';
import Funmet from './components/funmet';
import Personlis from './components/personlis';
import Ctyle from './components/cssStyle';
import Inline from './components/inline';
import Cssmode from './components/examp2.module.css'
import './components/examp1.css'
import CMode from './components/cssmode'
import Form from './components/form';
import Lifecycel from './components/Lifecycel';
import { Fragment } from 'react';
import Framgment from './components/Framgment';
import Parentcomp from './components/Parentcomp';
import Refs from './components/Refs';
import Counter from './components/Counter';
import Clickcount from './components/Clickcount';
import Hovercount from './components/Hovercount';
import Hookcounter from './components/Hookcounter';
import Hookobje from './components/Hookobje';
import Hookarr from './components/Hookarr';
import Useeffect from './components/Useeffect';
import HookMouse from './components/HookMouse';
import Timmer from './components/Timmer';
import Fetchdata from './components/Fetchdata';

function App() {
  return (
    <div className="App">
     {/*<Greets/>*/}
     {/*<Functionss/>*/}
     {/*<Mess/>*/}
     {/*<List/>*/}
     {/*<Funmet/>*/}
     {/* <Personlis/>*/}
     {/*<Ctyle prime={false}/>*/}
     {/* <Inline/>  */}
     {/*<h1 className='examp1'>This is from examp1</h1>*/}
     {/* <h1 className={Cssmode.examp2}>This is from css mode examp2</h1>*/}
     {/*<CMode/>*/}
     {/* <Form/>*/}
     {/*<Lifecycel/>*/}
     {/*<Framgment/>*/}
     {/*<Parentcomp/>*/}
     {/*<Refs/>*/}
     {/*<Counter render={(count,incrementCount)=>(
      <Clickcount count={count} incrementCount={incrementCount}/>
     )}/>
     <Counter render={(count,incrementCount)=>(
      <Hovercount count={count} incrementCount={incrementCount}/>
     )}/>*/}
     {/*<Hookcounter/>*/}
     {/*<Hookobje/>*/}
     {/*<Hookarr/>*/}
     {/*<Useeffect/>*/}
     {/*<HookMouse/>*/}
     {/* <Timmer/>*/}
     <Fetchdata/>
    </div>
  );
}

export default App;
