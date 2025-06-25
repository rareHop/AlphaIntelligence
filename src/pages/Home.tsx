import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const topics = [
    {
      id: 1,
      title: "What is Artificial Intelligence?",
      description: "Learn the basics of AI, how it works, and its applications in everyday life.",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Discover how machines learn from data and make predictions.",
      icon: "📊"
    },
    {
      id: 3,
      title: "Deep Learning",
      description: "Explore neural networks and how they mimic the human brain.",
      icon: "🧠"
    },
    {
      id: 4,
      title: "Natural Language Processing",
      description: "Understand how computers process and understand human language.",
      icon: "💬"
    },
    {
      id: 5,
      title: "Computer Vision",
      description: "Learn how machines can see and interpret visual information.",
      icon: "👁️"
    },
    {
      id: 6,
      title: "AI in Robotics",
      description: "Discover how AI powers modern robots and automation.",
      icon: "🤖"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Spectrum
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Learn Artificial Intelligence through simple explanations and interactive chat. 
            A Computer Science project by students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/chat"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with AI
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">AI Topics</h2>
            <p className="text-slate-300">Click on any topic to learn more</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                to={`/topic/${topic.id}`}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {topic.description}
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <Brain className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Learn AI?
          </h2>
          <p className="text-slate-300 mb-8">
            Start your AI learning journey today with our interactive lessons and AI chatbot.
          </p>
          <Link 
            to="/chat"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Learning
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;