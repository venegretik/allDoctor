import React, {useEffect} from 'react'
import './App.css';
import {Route, Routes} from 'react-router';
import {Layout} from "./Pages/Layout/Layout";
import {MyProfile} from "./Pages/Views/My_Profile/MyProfile";
import {DoctorList} from "./Pages/Views/Doctor_list/DoctorList";
import Consultation from "./Pages/Views/Consultation/Consultation";
import {MyDoctor} from "./Pages/Views/My_Doctor/MyDoctor";
import Register from "./Pages/Views/Register/Register";
import {useDispatch, useSelector} from 'react-redux/es/exports'
import {Preloader} from "./Components/Preloader/Preloader";
import {LandingLoader} from "./Pages/Views/Landing/LandingLoader";
import {Landing} from "./Pages/Views/Landing/landing";
import Main from "./Pages/Views/Main/Main";
import {axiosConfig} from "./base/asyncActions/getConfig";
import {Login} from "./Pages/Views/Login/Login";

function App() {
  const dispatch = useDispatch()
  const config = useSelector(state => state.config.config)
  const loading = useSelector(state => state.config.loading)
  useEffect(() => {
    setTimeout(() => {
      dispatch(axiosConfig())
    }, 2000)
  }, [])
  return (
    <>
      {!loading
        ?
        <Preloader/>
        :
        <Routes>
          <Route index element={
            <LandingLoader>
              <Landing html={config.module.landing.html}/>
            </LandingLoader>
          }/>
          <Route path={'login'} element={<Login/>}/>
          <Route path={'register'} element={<Register/>}/>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'main'} element={<Main/>}/>
            <Route path={'profile'} element={<MyProfile/>}/>
            <Route path={'doctor-list'} element={<DoctorList/>}/>
            <Route path={'consultation'} element={<Consultation/>}/>
            <Route path={'my-doctor'} element={<MyDoctor/>}/>
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
