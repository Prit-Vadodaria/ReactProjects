import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>
  {
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>
    {
      setAlert(null);
    },1500)
  }

  const toggleMode = () =>
  {
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.background='black';
        document.body.style.color='white';
        showAlert("Dark Mode Enabled","success");
      }
      else
      {
        setMode('light');
        document.body.style.background='white';
        document.body.style.color='black';
        showAlert("Light Mode Enabled","success");
      }
  }
  return (
    <>
      <Navbar title="MyTextPlayground" mode={mode} togglemode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
         <TextForm heading="Text Editor" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
