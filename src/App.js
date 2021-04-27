import logo from './logo.svg';
import './App.css';
import data from './pages/wine.json'
import ScatterPlot from './pages/scatter'
import BarPlot from './pages/bar';

function App() {
  return (
    <div className="App">
        <div style={{"width":300,"height":300,marginLeft:"-49px"}}>
<ScatterPlot/>
        </div>
        <br></br>
        <br></br>
        <div style={{"width":300,"height":300,marginLeft:"-49px", marginTop:"50px"}}>
<BarPlot/>
        </div>
    </div>
  );
}

export default App;
