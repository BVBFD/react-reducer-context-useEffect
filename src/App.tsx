import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Post from './pages/Post';
import { Context } from './Context/Context';

const App = () => {
  // ContextAPI
  const context = useContext(Context);
  console.log(context);
  return (
    <Routes>
      <Route path={'/'}>
        <Route index element={<Form />} />
        <Route path={'post'} element={<Post />} />
        <Route path={'users'} element={<Post />}>
          <Route path={':id'} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
