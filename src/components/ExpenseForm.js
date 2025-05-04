import React, { useState, useEffect } from 'react';

export default function ExpenseForm({ onAddExpense, editing }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('General');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (editing) {
      setDescription(editing.description || '');
      setAmount(editing.amount || '');
      setCategory(editing.category || 'General');
      setDate(editing.date || '');
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !date) {
      alert('Please fill all fields!');
      return;
    }

    const expenseData = {
      description,
      amount,
      category,
      date
    };

    onAddExpense(expenseData);

    // Clear form after submit
    setDescription('');
    setAmount('');
    setCategory('General');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '10px', borderRadius: '8px' }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: '10px', borderRadius: '8px' }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: '10px', borderRadius: '8px' }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: '10px', borderRadius: '8px' }}
      >
        <option value="General">General</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Lodging">Lodging</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button
        type="submit"
        style={{
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#00f2ff',
          color: '#000',
          fontWeight: 'bold'
        }}
      >
        {editing ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
}
