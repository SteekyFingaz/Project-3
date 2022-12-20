const Error = (props) => {
  return (
    <div>
      <p>Error: {props.message}</p>
      <button oncClick={props.resetState}>Return to List</button>
    </div>
  );
};

export default Error;
