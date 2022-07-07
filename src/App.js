import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Main from './Main/Main'
import My_Doctor from './My_Doctor/My_Doctor'
import Consultation from './Consultation/Consultation';
import Doctor_list from './Doctor_list/Doctor_list'
import { Layout } from "./Layout/Layout";
import { Config_api } from './User_api/User-api';
import Register from './Register/Register';
import Select_custom from './Components/Select/Select';
import My_Profile from './My_Profile/My_Profile';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux/es/exports';
import { LoginAuthThunkCreator } from './base/LoginReducer'
import Login from './Login/Login';
//проверка
function App(props) {
  console.log(props)
  useEffect(() => {
    props.LoginAuthThunkCreator()
  },[])
  if (!props.message)  
    return <Login/>
  else {
    return (
      <>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<My_Profile/>} />
            <Route path={'doctor-list'} element={<Doctor_list />} />
            <Route path={'consultation'} element={<Consultation />} />
            <Route path={'my-doctor'} element={<My_Doctor />} />
            <Route path={'register'} element={<Register />} />
            <Route  path={'login'} element={<Login />}/>
          </Route>
        </Routes>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    message: state.login.status
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
