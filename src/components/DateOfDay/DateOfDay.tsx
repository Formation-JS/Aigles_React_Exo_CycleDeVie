
export default function DateOfDay() {

  const today = new Date().toLocaleDateString('fr-be', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  });
  console.log('Date !');
  
  return (
    <span>{today}</span>
  );
};