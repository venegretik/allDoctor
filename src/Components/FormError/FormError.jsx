const FormErrors = (props) => {
  const text = <p style={{ color: "red", cursor:"default" }}>{props.error}</p>;
  return <>{text}</>;
};

export default FormErrors;
