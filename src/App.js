import './App.css';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Login from './Login/Login'
import {Route, Routes} from 'react-router';
import Main from './Main/Main'
import My_Doctor from './My_Doctor/My_Doctor'
import Post_rewiew from './Post_review/Post_review';
import {Config_api} from './User_api/User-api';
import Consultation from './Consultation/Consultation';
import Doctor_list from './Doctor_list/Doctor_list'
import {Layout} from "./Layout/Layout";


function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path='main' element={<Main/>}>
            <Route path='doctor-list' element={<Doctor_list/>}/>
          </Route>
          <Route path='consultation' element={<Consultation/>}/>
          <Route path='my-doctor' element={<My_Doctor/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
