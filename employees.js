const Employees = (props) => {
  return (
    <div style={{ backroundColor: "#aaa" }}>
      {props.data.map((employee) => {
        return (
          <p
            key={employee.id}
            onClick={() => {
              props.setSelectedEmployee(employee.id);
            }}
            style={{ cursor: "pointer" }}
            role="button"
          >
            {employee.name}_{employee.department}--{employee.id}
          </p>
        );
      })}
    </div>
  );
};

export default Error;
