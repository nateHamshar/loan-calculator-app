import './App.css';
import DataCharts from './DataCharts';
import DataNumbers from './DataNumbers';
import Intro from './Intro';
import LoanForm from './LoanForm';
function App() {
  return (
    <div className="App">
      <Intro />
      <LoanForm />
      <DataNumbers />
      <DataCharts />
    </div>
  );
}

export default App;
