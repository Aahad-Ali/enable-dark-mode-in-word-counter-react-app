import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";

function App() {
  const [mode, setMode] = useState('light');

const darkMode = ()=>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor ='black';
}
else{
  setMode('light')
  document.body.style.backgroundColor ='white';

}
}

  return (
    <>
      <Navbar title="Word Counter App:" mode={mode} darkMode={darkMode}/>
      <div className="container">
        <Text heading="Enter any text here:" mode={mode} />
      </div>
    </>
  );
}

export default App;
