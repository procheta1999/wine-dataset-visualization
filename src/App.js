import './App.css';
import ScatterPlot from './pages/scatter' // ScatterPlot component
import BarPlot from './pages/bar'; // BarPlot component
import ScatterPlotRes from './pages/responsive/scatter_reponsive';
import BarPlotRes from './pages/responsive/bar_responsive';
import ScatterPlotResIpad from './pages/responsive/scatter_responsive_ipad';

function App() {
  return (
    <div className="App">
    
        <div id="scatter">
<ScatterPlot/>
        </div>
        <br></br>
        <div id="scatterplot" style={{marginTop:"50px"}}>
<ScatterPlotRes/>
        </div>
        <div id="ipad">
          <ScatterPlotResIpad/>
        </div>
        <div id="space"></div>
        <div id="bar">
<BarPlot/>
        </div>
        <br></br>
        <div id="barplot">
<BarPlotRes/>
        </div>
    </div>
  );
}

export default App;
