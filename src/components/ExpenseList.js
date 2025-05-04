export default function ExpenseList({ expenses, onEdit, onDelete }) {
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th><th>Description</th><th>Amount</th><th>Category</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, idx) => (
            <tr key={idx}>
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
  