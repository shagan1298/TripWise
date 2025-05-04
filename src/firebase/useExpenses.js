import { useEffect, useState } from "react";
import { db, ref, push, set, onValue, remove, update } from "./firebase";

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesRef = ref(db, "expenses");
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
      setExpenses(list);
    });
  }, []);

  const addExpense = (expense) => {
    const newRef = push(ref(db, "expenses"));
    set(newRef, expense);
  };

  const editExpense = (id, updated) => {
    update(ref(db, `expenses/${id}`), updated);
  };

  const deleteExpense = (id) => {
    remove(ref(db, `expenses/${id}`));
  };

  return { expenses, addExpense, editExpense, deleteExpense };
};