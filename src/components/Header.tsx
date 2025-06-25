import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, MessageCircle, Home } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-white">AI Spectrum</h1>
              <p className="text-sm text-slate-400">Computer Science Project</p>
            </div>
          </Link>
          
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link 
              to="/chat" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/chat' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-300 hover:text-blue-400'
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">AI Chat</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;