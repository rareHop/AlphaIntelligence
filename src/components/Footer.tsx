import React from 'react';
import { Brain, Github, Mail, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-white">AI Spectrum</h3>
                <p className="text-sm text-slate-400">Computer Science Project</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              An educational platform to learn about Artificial Intelligence. 
              Created by computer science students as a learning project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  AI Topics
                </a>
              </li>
              <li>
                <a href="/chat" className="hover:text-blue-400 transition-colors flex items-center">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Project Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>Student Project</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Github className="h-5 w-5 text-blue-400" />
                <span>Computer Science Spectrum</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
  © 2025 AI Spectrum - Alpha Intelligence Group
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
