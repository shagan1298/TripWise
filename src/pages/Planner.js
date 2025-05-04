import React from 'react';
import '../styles/planner.css'; 

function Planner() {
  return (
    <div className="budget-page">
      <h1>Smart Ways to Save Money While Traveling</h1>

      <section className="saving-category">
        <h2>Accommodation Savings</h2>
        <ul>
          <li>Consider hostels or guesthouses instead of hotels.</li>
          <li>Look for deals on Airbnb or vacation rentals, especially for longer stays.
            <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer">
              <button className="book-button">Book on Airbnb</button>
            </a>
          </li>
          <li>Travel during the off-season or shoulder seasons for lower prices.</li>
          <li>Book in advance, but also check for last-minute deals.</li>
          <li>Consider overnight transportation (e.g., night trains or buses) to save on accommodation costs.</li>
        </ul>
      </section>

      <section className="saving-category">
        <h2>Transportation Savings</h2>
        <ul>
          <li>Book flights in advance and be flexible with your travel dates and times.
            <a href="https://www.skyscanner.co.in/" target="_blank" rel="noopener noreferrer">
              <button className="book-button">Find Flights on Skyscanner</button>
            </a>
          </li>
          <li>Consider budget airlines, but be aware of extra fees.</li>
          <li>Utilize public transportation like buses, trains, and metros.
          </li>
          <li>Walk or bike whenever possible.</li>
          <li>If renting a car, compare prices and consider the smallest car that meets your needs.
            <a href="https://www.kayak.co.in/cars/" target="_blank" rel="noopener noreferrer">
              <button className="book-button">Compare Car Rentals on Kayak</button>
            </a>
          </li>
          <li>Look into ride-sharing services as a potentially cheaper alternative to taxis.
          </li>
        </ul>
      </section>

      <section className="saving-category">
        <h2>Food & Drink Savings</h2>
        <ul>
          <li>Cook some of your own meals, especially breakfast and lunch, if your accommodation allows.
          </li>
          <li>Eat at local eateries and street food vendors instead of tourist traps.
          </li>
          <li>Take advantage of free breakfast offered by your accommodation.</li>
          <li>Carry a reusable water bottle and refill it instead of buying bottled water.</li>
          <li>Limit alcohol consumption, as it can significantly increase expenses.</li>
          <li>Pack snacks to avoid impulse buys.</li>
        </ul>
      </section>

      <section className="saving-category">
        <h2>Activities & Entertainment Savings</h2>
        <ul>
          <li>Look for free activities and attractions like parks, walking tours, and local markets.
          </li>
          <li>Take advantage of student or senior discounts if applicable.
          </li>
          <li>Consider purchasing city passes or discount cards for multiple attractions.
            <a href="https://www.getyourguide.com/" target="_blank" rel="noopener noreferrer">
              <button className="book-button">Explore Activities on GetYourGuide</button>
            </a>
          </li>
          <li>Plan your itinerary to group activities geographically to save on transportation costs.</li>
          <li>Look for free events or festivals happening during your travel dates.
          </li>
          <li>Be selective about paid tours and activities; research beforehand for the best value.</li>
        </ul>
      </section>

      <section className="saving-category">
        <h2>Other Smart Savings Tips</h2>
        <ul>
          <li>Inform your bank about your travel plans to avoid unexpected card blocks and international transaction fees.
          </li>
          <li>Consider using travel credit cards with no foreign transaction fees and travel rewards.
          </li>
          <li>Set a daily budget and track your spending.
          </li>
          <li>Be prepared for unexpected expenses by having a small contingency fund.</li>
          <li>Learn a few basic phrases in the local language; it can sometimes lead to better deals and experiences.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Planner;