import React, {useState, useEffect} from 'react'
import './App.css';
import {Route, Routes} from 'react-router';
import {Layout} from "./Pages/Layout/Layout";
import My_Profile from "./Pages/Views/My_Profile/My_Profile";
import Doctor_list from "./Pages/Views/Doctor_list/Doctor_list";
import Consultation from "./Pages/Views/Consultation/Consultation";
import My_Doctor from "./Pages/Views/My_Doctor/My_Doctor";
import Register from "./Pages/Views/Register/Register";
import Login from "./Pages/Views/Login/Login";
import {connect} from 'react-redux/es/exports'
import {LoginAuthThunkCreator} from "./base/LoginReducer";
import {Preloader} from "./Components/Preloader/Preloader";


function App(props) {

  useEffect(() => {
    setTimeout(() => {
      props.LoginAuthThunkCreator()
    }, 2000)
  }, [])

  const loading = props.config.response.status,
        config = props.config.response;
  return (
    <>
      {
        !loading
          ?
          <Preloader/>
          :
          <Routes>
            <Route path={'/'} element={<Layout/>}>
              <Route index element={<My_Profile/>}/>
              <Route path={'doctor-list'} element={<Doctor_list/>}/>
              <Route path={'consultation'} element={<Consultation/>}/>
              <Route path={'my-doctor'} element={<My_Doctor/>}/>
              <Route path={'register'} element={<Register/>}/>
              <Route path={'login'} element={<Login/>}/>
            </Route>
          </Routes>
      }
    </>
  );
}

let mapStateToProps = (state) => {
  return {
    message: state.login.status,
    config: state.login
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    LoginAuthThunkCreator: () => {
      dispatch(LoginAuthThunkCreator());
    }
  }
}
const App_Container = connect(mapStateToProps, mapDispatchToProps)(App);
export default App_Container;
