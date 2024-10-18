import React, { useState } from 'react'
import './App.css'
import ProfilePage from './components/ProfilePage';
import { UserContext } from './components/UserContext'

function App() {
  const [userData, setUser] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
