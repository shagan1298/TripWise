import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Planner from './pages/Planner';
import Reports from './pages/reports';
import Login from './pages/login';
import Signup from './pages/signup';
import './index.css';
import Budget from './pages/budget';
import Goals from './pages/goals';
import CurrencyConverter from './pages/CurrencyConverter';
import Profile from './pages/profile';
import { useAuth } from "./firebase/AuthContext";
import ProtectedRoute from './components/ProtectedRoute';
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* All protected pages below */}
            <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path='/budget' element={<ProtectedRoute><Budget/></ProtectedRoute>}/>
            <Route path="/Planner" element={<ProtectedRoute><Planner /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path='/CurrencyConverter' element={<ProtectedRoute><CurrencyConverter/></ProtectedRoute>}/>
            <Route path='/goals' element={<ProtectedRoute><Goals/></ProtectedRoute>}/>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
