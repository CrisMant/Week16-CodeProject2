import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../elements/TaskList';

const Tasks = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <Link to="/tasks/new">Add New Task</Link>
      <TaskList />
    </div>
  );
};

export default Tasks;