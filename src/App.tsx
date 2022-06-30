import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.scss';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/admin' element={<AdminPage/>} />
    </Routes>
  );
}

export default App;
