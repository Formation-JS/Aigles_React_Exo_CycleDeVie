import { useEffect, useState } from 'react';

export default function Clock() {
  
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timerId = setTimeout(() => {
      setNow(new Date());
      console.log('Tick');
    }, 1000);

    return () => {
      clearTimeout(timerId)
    }
  })

  const hours = now.getHours().toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });
  const minutes = now.getMinutes().toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });
  const secondes = now.getSeconds();

  return (
    <span>{hours} : {minutes} : {secondes < 10 && '0'}{secondes}</span>
  );
}