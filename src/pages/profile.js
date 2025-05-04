import React from 'react';
import '../styles/profile.css';
import { useAuth } from '../firebase/AuthContext';

function Profile() {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar">
          <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || user.email}`} alt="User Avatar" />
        </div>
        <h2>{user.displayName || "Anonymous"}</h2>
        <p className="email">{user.email}</p>
        <p className="joined">Member since: {new Date(user.metadata.creationTime).toLocaleDateString()}</p>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
