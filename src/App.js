import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Navbar from './components/Navbar';



function App() {
  const [isOnline, setIsOnline] = useState(true)
  // useEffect(()=>{
  //    ? setIsOnline(true) : setIsOnline(false)
  // },[navigator.onLine])

  return (
    <div className="items-center App bg-yellow-50 min-h-screen" style={{textAlign: "-webkit-center"}}>
      {!navigator.onLine? <div className='bg-yellow-200 text-orange-600 font-semibold '>Offline or Connectivity Error</div>: ""}
      <Navbar/>
      <Grid/>
    </div>
  );
}

export default App;
