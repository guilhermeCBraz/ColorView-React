import { useState } from 'react';
import './App.css';
import Content from './Content';

function App() {
  const [colorCard, setColorCard] = useState('');
  const [colorHex, setColorHex] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Content
        colorCard={colorCard}
        setColorCard={setColorCard}
        colorHex={colorHex}
        setColorHex={setColorHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText} />
    </div>
  );
}

export default App;
