import React from "react";
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import NavMenu from './components/NavMenu/index';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import GroupPage from './pages/GroupPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
