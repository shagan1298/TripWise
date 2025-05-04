import React, { useState, useEffect } from "react";
import { db, ref, push, set, onValue, remove, update } from '../firebase/firebaseConfig';
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

export default function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const expensesRef = ref(db, 'expenses');
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedExpenses = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      setExpenses(loadedExpenses);
    });
  }, []);

  const addExpense = async (expense) => {
    if (editing) {
      await update(ref(db, `expenses/${editing.id}`), expense);
      setEditing(null); 
    } else {
      const newRef = push(ref(db, 'expenses'));
      await set(newRef, expense);
    }
  };

  const deleteExpense = async (id) => {
    await remove(ref(db, `expenses/${id}`));
  };

  const handleEdit = (expense) => {
    console.log("Editing expense:", expense);
    setEditing(expense);
  };

  const total = expenses.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);

  return (
    <div className="budget-page" style={{ padding: "40px", color: "#fff" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "#1e293b",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 0 25px rgba(0,255,255,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "#00f2ff",
            marginBottom: "20px",
          }}
        >
          Expenses
        </h2>

        <div className="section" style={{ marginBottom: "30px" }}>
          <h3 style={{ color: "#38bdf8" }}>{editing ? "Edit Expense" : "Add New Expense"}</h3>
          <ExpenseForm onAddExpense={addExpense} editing={editing} />
          
        </div>

        <div className="section">
          <h3 style={{ color: "#38bdf8" }}>Your Expenses</h3>
          <ExpenseTable
            expenses={expenses}
            onDelete={deleteExpense}
            onEdit={handleEdit}
          />
        </div>

        <div
          style={{
            marginTop: "30px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            textAlign: "right",
            color: "#00f2ff",
          }}
        >
          Total TripWise Expense ₹{total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
