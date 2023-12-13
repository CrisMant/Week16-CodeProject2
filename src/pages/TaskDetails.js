import React from 'react';

const TaskDetails = ({ match }) => {
  const taskId = match.params.id;

  return (
    <div>
      <h2>Task Details</h2>
      <p>Task ID: {taskId}</p>
      {}
    </div>
  );
};

export default TaskDetails;