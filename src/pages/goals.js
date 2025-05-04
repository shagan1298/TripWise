import React, { useEffect, useState } from "react";
import { db, ref, set, onValue } from "../firebase/firebaseConfig";
import { update } from "firebase/database";

export default function Goals() {
  const [budgetGoals, setBudgetGoals] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [inputGoals, setInputGoals] = useState({});

  const userId = "demoUser";
  const categories = ["Food", "Travel", "Lodging", "Shopping"];

  useEffect(() => {
    onValue(ref(db, "expenses"), (snapshot) => {
      const data = snapshot.val();
      const list = data ? Object.values(data) : [];
      setExpenses(list);
    });

    onValue(ref(db, `budgetGoals/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data) setBudgetGoals(data);
    });
  }, []);

  const handleGoalChange = (category, value) => {
    const numericValue = parseFloat(value);
    if (numericValue !== 0) {
      setInputGoals({ ...inputGoals, [category]: numericValue });
    }
  };
  
  const saveGoals = () => {
    update(ref(db, `budgetGoals/${userId}`), inputGoals); 
    setInputGoals({});
  };

  const getTotalSpentByCategory = (category) => {
    return expenses
      .filter((exp) => exp.category === category)
      .reduce((acc, cur) => acc + parseFloat(cur.amount || 0), 0);
  };

  return (
    <div className="goals-page" style={{ padding: "30px", maxWidth: "800px", margin: "auto", color: "#fff" }}>
      <h2 style={{ color: "#60a5fa", marginBottom: "20px" }}>Set Budget Goals</h2>

      {categories.map((category) => {
        const spent = getTotalSpentByCategory(category);
        const goal = budgetGoals[category] || 0;
        const percent = goal > 0 ? Math.min((spent / goal) * 100, 100) : 0;
        const progressColor =
          spent > goal ? "#ef4444" : spent > goal * 0.8 ? "#facc15" : "#22c55e";

        return (
          <div key={category} style={{ marginBottom: "25px" }}>
            <label style={{ fontWeight: "bold" }}>{category} Goal (₹): </label>
            <input
              type="number"
              placeholder={`Enter ${category} goal`}
              value={inputGoals[category] || ""}
              onChange={(e) => handleGoalChange(category, e.target.value)}
              style={{ marginLeft: "10px", padding: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <div style={{ marginTop: "10px" }}>
              <strong>Spent:</strong> ₹{spent.toFixed(2)} / ₹{goal.toFixed(2)}
              <div
                style={{
                  marginTop: "5px",
                  height: "12px",
                  background: "#ddd",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${percent}%`,
                    backgroundColor: progressColor,
                    height: "100%",
                  }}
                />
              </div>
              {spent > goal && (
                <p style={{ color: "#f87171", fontWeight: "bold", marginTop: "5px" }}>
                  ⚠ Over budget!
                </p>
              )}
            </div>
          </div>
        );
      })}

      <button
        onClick={saveGoals}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "6px",
          background: "#3b82f6",
          color: "#fff",
          border: "none",
        }}
      >
        Save Goals
      </button>
    </div>
  );
}
