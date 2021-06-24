
import './App.css';
import { Paper } from '@material-ui/core';
import Task from './TaskComponents/Task'

function App() {
  return (
    <div className="App">
      <Paper elevation={3}>
        <Task />
      </Paper>
    </div>
  );
}

export default App;
