import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home.js';
import Tasks from './pages/Tasks.js';
import TaskDetails from './pages/TaskDetails.js';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>.
          <Route path="/" exact element={<Home/>} />
          <Route path="/tasks" exact element={<Tasks/>} />
          <Route path="/tasks/:id" element={<TaskDetails/>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;