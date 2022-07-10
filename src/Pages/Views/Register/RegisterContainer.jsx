import React from "react";
import Register from "./Register";
import { axiosRegister } from "../../../base/asyncActions/RegistrPost";
import { connect } from "react-redux";

const RegisterContainer = (props) =>{
    return <Register {...props}/>
}
let mapStateToProps = (state) => {
    return{

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        axiosRegister:(obj, token) => {
            dispatch(axiosRegister(obj, token));
        }
    }
}
const RegisterCon = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
export default RegisterCon;