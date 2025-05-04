import React from "react";

function ExpenseTable({ expenses, onDelete, onEdit }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.date}</td>
            <td>{exp.description}</td>
            <td>${exp.amount}</td>
            <td>{exp.category}</td>
            <td>
              <button onClick={() => onEdit(exp)}>Edit</button>
              <button onClick={() => onDelete(exp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
