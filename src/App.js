import './App.css';
import ScatterPlot from './pages/scatter' // ScatterPlot component
import BarPlot from './pages/bar'; // BarPlot component
import ScatterPlotRes from './pages/responsive/scatter_reponsive';
import BarPlotRes from './pages/responsive/bar_responsive';


function App() {
  return (
    <div className="App">
    
        <div id="scatter">
<ScatterPlot/>
        </div>
        <br></br>
        <div id="scatterplot" style={{marginTop:"50px"}}>
<ScatterPlotRes width="205"/>
        </div>
        <div id="iphone">
          <ScatterPlotRes width="176"/>
        </div>
        <div id="ipad">
          <ScatterPlotRes width="500"/>
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
