
const Landing = (props) => {
  return (
    <div dangerouslySetInnerHTML={{__html: props.html}}>
    </div>
  );
};

export {Landing};