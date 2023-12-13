import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { getTasks } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;