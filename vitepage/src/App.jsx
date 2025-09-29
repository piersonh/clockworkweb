import logo from './logo.svg';
import './App.css';
import TeamTable from './components/TeamTable';
import Timeline from './components/Timeline';
import TitlePage from './components/TitlePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App-container'>

      <div className="App-background">
        <div className="App-background-diagonal"></div>
      </div>

      <div className='App-content'>
        <NavBar />
        <TitlePage />

        <div className="spacer" />

        <div className="App-sub-container" id='milestones-section' style={{scrollMarginTop: '80px'}}>
          <Timeline />
        </div>

        <div className="big-spacer" />

        <div className="App-sub-container" id='team-section' style={{scrollMarginTop: '80px'}}>
          <TeamTable />
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
