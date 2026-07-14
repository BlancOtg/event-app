import Button from './Button'; 
const GreetingCard = () => {
  const name = 'John Doe';
  return (
    <div className="flex items-center gap-5 flex-col justify-center p-4 rounded shadow-md">
      <p1>welcome {name}</p1>
      <Button onClick={() => console.log('Button clicked!')} text="Press here" />
    </div>
  )
}

export default GreetingCard
