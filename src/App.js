import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';


function App() {
  const [showData, setShowData] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShowData(false)}>Hide Data</button>
     {showData && <TripList />}
    </div>
  );
}

export default App;
