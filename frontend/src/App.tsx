import './App.css'
import BowlersList from './BowlersList';

function Welcome(){
return (
  <>
    <h1>Welcome to the Bowling League Page!</h1>
    <h2>This page contains info about the Marlins and Sharks, and the players on each team</h2>
  </>
);
}

function App() {
  return (
    <>
      <Welcome/>
      <BowlersList/>
    </>
  )
}

export default App
