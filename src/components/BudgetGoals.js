// BudgetGoals.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, set, get } from "firebase/database";

const BudgetGoals = ({ userId }) => {
  const [budgets, setBudgets] = useState({ food: "", transport: "", entertainment: "" });

  useEffect(() => {
    const fetchBudgets = async () => {
      const snapshot = await get(ref(db, `users/${userId}/budgets`));
      if (snapshot.exists()) {
        setBudgets(snapshot.val());
      }
    };
    fetchBudgets();
  }, [userId]);

  const handleChange = (e) => {
    setBudgets({ ...budgets, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await set(ref(db, `users/${userId}/budgets`), budgets);
    alert("Budget goals updated!");
  };

  return (
    <div>
      <h3>Set Budget Goals</h3>
      {Object.keys(budgets).map((category) => (
        <div key={category}>
          <label>{category}:</label>
          <input
            type="number"
            name={category}
            value={budgets[category]}
            onChange={handleChange}
            placeholder={`Enter budget for ${category}`}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save Budgets</button>
    </div>
  );
};

export default BudgetGoals;
