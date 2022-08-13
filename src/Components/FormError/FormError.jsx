const FormErrors = (props) => {
  const text = <p style={{ color: "red" }}>{props.error}</p>;
  return <>{text}</>;
};

export default FormErrors;
