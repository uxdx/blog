import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.scss';
import AdminPage from './pages/AdminPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/admin' element={<AdminPage/>} />
      <Route path="/posts/:id" element={ <PostPage/> }/>
    </Routes>
  );
}

export default App;
