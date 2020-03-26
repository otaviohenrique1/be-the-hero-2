import React from 'react';
import './global.css';
import Routes from './routes';

function App() {
  return (
    <Routes/>
  );
}

export default App;
/*
  function App() {
    let [counter, setCounter] = useState(0);

    function increment() {
      setCounter(counter += 1);
    }

    return (
      <div>
        <Header>Contador: {counter}</Header>
        <button onClick={increment}>Incrementar</button>
      </div>
    );
  }
*/

/*
  function App() {
    return (
      <Header title="Semana OmniStack">
        Semana OmniStack
      </Header>
    );
  }
*/


// Link de acesso -> localhost:3000