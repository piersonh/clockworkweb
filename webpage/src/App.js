import logo from './logo.svg';
import './App.css';
import TeamTable from './components/TeamTable';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className='App-container'>
      <h1>ClockWork Time Estimation Application</h1>
      <div className='App-timeline'>
        <Timeline />
      </div>
      <TeamTable />
    </div>
  );
}

export default App;
