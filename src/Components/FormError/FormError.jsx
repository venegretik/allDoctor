import s from "../Modal/Change_login/Change_login.module.css";
const FormErrors = (props) => {
  const text = <p style={{ color: "red", cursor:"default" }} className={s.Font_size14}>{props.error}</p>;
  return <>{text}</>;
};

export default FormErrors;
