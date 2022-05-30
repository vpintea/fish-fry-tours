import './App.css';
import Swimlanes from "./components/swimlane-component/swimlane";

function App() {
  // I know about routers, but for the interests of brevity in this challenge and the fact that it is truly a single
  // page application, a router is not included
  return (
    <div className="App">
        <Swimlanes/>
    </div>
  );
}

export default App;
