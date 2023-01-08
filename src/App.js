import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null);

  const showAlertHandler = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Enable light mode');
      document.body.style.backgroundColor = '#051c3e';
      showAlertHandler('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      setBtnText('Enable dark mode');
      document.body.style.backgroundColor = 'white';
      showAlertHandler('Light mode has been enabled!', 'success');
    }
  };
  return (
    <div className="App">
      <Navbar mode={mode} btnText={btnText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={<TextForm mode={mode} showAlertHandler={showAlertHandler} />}
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>

      {/* <About /> */}
    </div>
  );
}

export default App;
