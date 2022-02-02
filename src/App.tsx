import React, {FC, ChangeEvent,useState} from 'react';
import './App.css';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = () => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask]);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input 
            type="text" 
            placeholder="Task..." 
            onChange={handleChange} 
            name="task"
            value={task}
          />
          <input 
            type="number" 
            placeholder="Deadline in days"
            onChange={handleChange} 
            name="deadline"
            value={deadline}
          />          
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
