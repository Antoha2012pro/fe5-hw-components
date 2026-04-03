import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Greeting from './components/Greeting';
import Message from './components/Message';

function App() {
  const firstName = 'Іван';
  const textMessage = 'Що сьогодні будете замовляти?';
  const textButton = 'Натисни на мене!!!';

  const [bgColor, setBgColor] = useState('white');

  const buttonEvent = () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    setBgColor(`rgb(${r}, ${g}, ${b})`);
    console.log("Ура, ви клікнули!");
  };

  return (
    <div style={{ backgroundColor: bgColor}}>
      <Greeting name={firstName} />
      <Message text={textMessage} />
      <Button onClick={buttonEvent} text={textButton} />
    </div>
  );
};

export default App;
