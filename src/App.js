import './App.css';
import InputComponent from './componenets/InputComponent';
import ViewTeams from './componenets/ViewTeams';

function App() {

  return (
    <div className="App">
      <h1>Task Scheduler</h1>
      <InputComponent/>
      <ViewTeams />
    </div>
  );
}

export default App;
