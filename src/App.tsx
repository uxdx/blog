import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.scss';
import AdminPage from './pages/AdminPage';
import PostPage from './pages/PostPage';
import { LoginModal } from './service/Auth';
import { useSelector } from 'react-redux';
import { RootState } from './service/store';


function App() {
  const loginModalState = useSelector((state:RootState)=>state.loginModal);

  return (
    <>
      <div style={loginModalState? {opacity: "0.8"} : {}}>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/admin' element={<AdminPage/>} />
          <Route path="/posts/:id" element={ <PostPage/> }/>
        </Routes>
      </div>
      {loginModalState ? <LoginModal/> : <></>}
    </>
  );
}

export default App;
