import './App.css';
import {Route, Routes} from 'react-router';
import Main from './Main/Main'
import My_Doctor from './My_Doctor/My_Doctor'
import Consultation from './Consultation/Consultation';
import Doctor_list from './Doctor_list/Doctor_list'
import {Layout} from "./Layout/Layout";
import { Config_api } from './User_api/User-api'


//проверка
function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path={'doctor-list'} element={<Doctor_list/>}/>
          <Route path={'consultation'} element={<Consultation/>}/>
          <Route path={'my-doctor'} element={<My_Doctor/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
