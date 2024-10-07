import React, {useState} from 'react';
import './assets/css/styles.css';
import './assets/css/styles-1180.css';
import './assets/css/styles-780.css';
import './assets/css/styles-480.css';
// import Modal from "./components/ordinary/modal/modal";
// import ModalRole from "./components/ordinary/modal-role/modal-role";
import ModalFaculty from "./components/ordinary/modal-faculty/modal-faculty";
// import ModalEnd from "./components/ordinary/modal-end/modal-end";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(true);
  return (
          <div className="App">
              <header className="App-header">
              </header>
            <main>
              {/*<Modal modalOpen={isModalOpen} setModalOpen={setIsModalOpen} />*/}
              {/*<ModalRole/>*/}
              <ModalFaculty/>
              {/*<ModalEnd/>*/}
            </main>
            <footer>

            </footer>
          </div>
  );
}

export default App;
