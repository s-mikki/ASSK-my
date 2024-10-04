import React, {useState} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/styles.css';
import './assets/css/styles-1180.css';
import './assets/css/styles-780.css';
import './assets/css/styles-480.css';
import Modal from "./components/ordinary/modal/Modal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(true);
  return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>
                      Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
              <Modal modalOpen={isModalOpen} setModalOpen={setIsModalOpen} />
          </div>
  );
}

export default App;
