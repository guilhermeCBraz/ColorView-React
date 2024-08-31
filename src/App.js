import { useState } from 'react';
import './App.css';
import Content from './Content';

function App() {
  const [colorCard, setColorCard] = useState('');
  const [colorHex, setColorHex] = useState('');

  return (
    <div className="App">
      <Content
        colorCard={colorCard}
        setColorCard={setColorCard}
        colorHex={colorHex}
        setColorHex={setColorHex} />
    </div>
  );
}

export default App;
