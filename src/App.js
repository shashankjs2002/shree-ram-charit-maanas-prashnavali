import './App.css';
import Grid from './components/Grid';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="items-center App bg-yellow-50 min-h-screen" style={{textAlign: "-webkit-center"}}>
      <Navbar/>
      <Grid/>
    </div>
  );
}

export default App;
