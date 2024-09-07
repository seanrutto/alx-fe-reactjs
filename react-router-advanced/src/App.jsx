import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
            <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
