const FormErrors = (props) => {
  let text;
  if (props.error.message) {
    text = <p style={{ color: "red" }}>{props.error.error.message}</p>;
  } else {
    text = <p style={{ color: "red" }}>{props.error}</p>;
  }
  return <>{text}</>;
};

export default FormErrors;
