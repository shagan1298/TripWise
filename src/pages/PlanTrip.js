import React, { useState } from "react";
import "../styles/plantrip.css"; 

function PlanTrip() {
  const [tripData, setTripData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travel: "",
    food: "",
    accommodation: "",
    extra: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const totalBudget =
    Number(tripData.travel) +
    Number(tripData.food) +
    Number(tripData.accommodation) +
    Number(tripData.extra);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Trip Plan Saved!");
    console.log(tripData);
  };

  return (
    <div className="plantrip-container">
      <h2>Plan Your Trip</h2>
      <form onSubmit={handleSubmit} className="plantrip-form">
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={tripData.destination}
          onChange={handleChange}
        />
        <input
          type="date"
          name="startDate"
          value={tripData.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={tripData.endDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="travel"
          placeholder="Travel Expense"
          value={tripData.travel}
          onChange={handleChange}
        />
        <input
          type="number"
          name="food"
          placeholder="Food Expense"
          value={tripData.food}
          onChange={handleChange}
        />
        <input
          type="number"
          name="accommodation"
          placeholder="Accommodation Expense"
          value={tripData.accommodation}
          onChange={handleChange}
        />
        <input
          type="number"
          name="extra"
          placeholder="Extra Expense"
          value={tripData.extra}
          onChange={handleChange}
        />
        <div className="total-budget">Total Budget: ₹{totalBudget}</div>
        <button type="submit" className="cta-button">Save Plan</button>
      </form>
    </div>
  );
}

export default PlanTrip;
