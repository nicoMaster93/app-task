import './App.css';
import ListTask from './components/ListTask';


function App() {
  return (
    <div className="app-task">
      <div className='app-task-list'>
          <h3>Lista de Tareas</h3>
          <ListTask />
      </div>
    </div>
  );
}

export default App;
