import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';
import ChatPage from './pages/ChatPage';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
          <Route path="/chat" element={<ChatPage />} />
         
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
