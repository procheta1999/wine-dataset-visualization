import logo from './logo.svg';
import './App.css';
import data from './pages/wine.json'
import ScatterPlot from './pages/scatter'

function App() {
  return (
    <div className="App">
        <div style={{"width":300,"height":300,marginLeft:"-49px"}}>
<ScatterPlot/>
        </div>
    </div>
  );
}

export default App;
