import s from "../Modal/Change_login/Change_login.module.css";
const FormErrors = (props) => {
  const text = <p style={{ color: "red", cursor:"default", marginTop:"10px", marginBottom:"10px" }} className={s.Font_size14}>{props.error}</p>;
  return <>{text}</>;
};

export default FormErrors;
