import { useState } from 'react';
import './App.css'
import Clock from './components/Clock/Clock';
import DateOfDay from './components/DateOfDay/DateOfDay';

function App() {

  const [isTime, setTime] = useState(true);

  return (
    <>
      <h1>Exo - Horloge</h1>

      <div onClick={() => setTime(old => !old)}>
        {isTime ? (
          <Clock />
        ) : (
          <DateOfDay />
        )}
      </div>

    </>
  )
}

export default App
