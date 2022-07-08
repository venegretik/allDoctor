import React from "react";
import Login from "./Login";
import {axiosAuth} from "../../../base/asyncActions/getConfig";
import { connect } from "react-redux";
const LoginContainer = (props) =>{
    return <Login {...props}/>
}
let mapStateToProps = (state) => {
    return{
        number_send: state.config.number_send,
        is_new_user: state.config.is_new_user
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        axiosAuth:(number, code)=>{
            dispatch(axiosAuth(number, code));
        }
    }
}
const Login_Con = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default Login_Con