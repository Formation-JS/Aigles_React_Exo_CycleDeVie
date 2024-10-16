import './App.css'
import Clock from './components/Clock/Clock';
import DateOfDay from './components/DateOfDay/DateOfDay';
import { useToggler } from './hooks/toggler.hook';

function App() {

  const [isTime, toggleTime] = useToggler(true);

  return (
    <>
      <h1>Exo - Horloge</h1>

      <div onClick={toggleTime}>
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
