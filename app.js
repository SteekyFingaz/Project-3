import "./styles.css";
import Employee from "./components/employee";
import Employees from "./components/employees";
import Error from "./components/error";
import Loading from "./components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [Loading, setLoading] = useState(true);

  const [employeeData, setEmployeeData] = useState([]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [error, setError] = useState(false);

  const resetState = () => {
    setEmployeeData([]);
    setSelectedEmployee(null);
    getEmployeeListing();
    setError(false);
  };
  const getEmployeeListing = (id = null) => {
    setLoading(true);

    let actualId = "";
    if (!!id && parseInt(id, 10) > 0) {
      actualId = parseInt(id, 10);
    }

    axios
      .get(`https://api.matgargano.com/employees/${actualId}`)
      .then((response) => {
        setEmployeeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Saul Goodman");
      });
  };
  useEffect(() => {
    getEmployeeListing();
  }, []);

  useEffect(() => {
    if (!!selectedEmployee) {
      getEmployeeListing(selectedEmployee);
    }
  }, [selectedEmployee]);

  return (
    <div className="App">
      {!!Error && <error resetState={resetState} message={error} />}
      {!Error && (
        <>
          {!!Loading && <Loading />}
          {!Loading && (
            <div>
              {!selectedEmployee && (
                <Employees
                  setSelectedEmployee={employeeData}
                  data={employeeData}
                />
              )}

              {!!selectedEmployee && (
                <Employee resetState={resetState} data={employeeData} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
