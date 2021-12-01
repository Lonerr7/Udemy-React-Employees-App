import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data}) => {
  const elements = data.map(item => <EmployeesListItem name={item.firstName} salary={item.salary} increase={item.increase} />);
  
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;
