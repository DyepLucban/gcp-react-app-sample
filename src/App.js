import logo from './logo.svg';
import './App.css';
import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';

function App() {
  let MAGICBELL_API_KEY = '2709b1fc121ce26869d683a4bc56aa5fdd233630'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          This is a test push change from development branch v2.
        </p>
        <p>
          This changes is came from my new branch.
        </p>
        <MagicBell apiKey={MAGICBELL_API_KEY} userEmail="lucbanjep@gmail.com">
          {(props) => <FloatingNotificationInbox height={300} {...props} />}
        </MagicBell>        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
