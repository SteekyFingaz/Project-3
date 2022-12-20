const Employee = (props) => {
  return (
    <div
      style={{ padding: "20px 30px", backroundColor: "#000", color: `#FFF` }}
    >
      <p>
        {props.data.name}__{props.data.department}
      </p>
      <p>
        {props.data.startDate}__{props.data.role}
      </p>
      <p>{props.data.photo}</p>
      <button onClick={props.resetState}>Return to Listing</button>
    </div>
  );
};

export default Employee;
