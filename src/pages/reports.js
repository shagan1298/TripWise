import React, { useState, useEffect } from "react";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import { db, ref, onValue } from "../firebase/firebaseConfig";
import { jsPDF } from "jspdf"; 
import { CSVLink } from "react-csv"; 

const Reports = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesRef = ref(db, "expenses");
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedExpenses = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      setExpenses(loadedExpenses); 
    });
  }, []);

  const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount || 0), 0);

  // PDF Export Function
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Expense Report", 10, 10);
    expenses.forEach((expense, index) => {
      doc.text(`${expense.category}: ₹${expense.amount}`, 10, 20 + index * 10);
    });
    doc.save("expenses-report.pdf");
  };

  // CSV Export Function
  const headers = [
    { label: "Category", key: "category" },
    { label: "Amount", key: "amount" },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#00f2ff", fontSize: "2.5rem" }}>Expense Report</h2>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        
        {/* BarChart Section */}
        <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#1e293b", borderRadius: "15px", padding: "1.5rem", boxShadow: "0 0 15px rgba(0, 255, 255, 0.1)" }}>
          <h3 style={{ color: "#38bdf8", textAlign: "center", marginBottom: "1rem" }}>Budget Overview (Monthly)</h3>
          <BarChart expenses={expenses} />
        </div>

        {/* PieChart Section */}
        <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#1e293b", borderRadius: "15px", padding: "1.5rem", boxShadow: "0 0 15px rgba(0, 255, 255, 0.1)" }}>
          <h3 style={{ color: "#38bdf8", textAlign: "center", marginBottom: "1rem" }}>Expense Distribution by Category</h3>
          <PieChart expenses={expenses} />
        </div>
      </div>

      {/* Total Expenses Summary */}
      <div style={{ marginTop: "2rem", fontSize: "1.5rem", textAlign: "center", fontWeight: "bold", color: "#00f2ff" }}>
        <p>Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
      </div>

      {/* Export Buttons */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button 
          style={{ padding: "10px 20px", backgroundColor: "#38bdf8", color: "#fff", borderRadius: "5px", marginRight: "10px" }}
          onClick={exportToPDF}
        >
          Export to PDF
        </button>
        <CSVLink 
          data={expenses} 
          headers={headers} 
          filename="expenses-report.csv"
        >
          <button 
            style={{ padding: "10px 20px", backgroundColor: "#38bdf8", color: "#fff", borderRadius: "5px" }}
          >
            Export to CSV
          </button>
        </CSVLink>
      </div>
    </div>
  );
};

export default Reports;
