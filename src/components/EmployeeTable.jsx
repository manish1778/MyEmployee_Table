import React from 'react';
import './EmployeeTable.css';

function EmployeeTable({ employees }) {
    return (
        <table className="employee-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={employee.id}>
                        <td>{String(index + 1).padStart(2, '0')}</td>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeeTable;
