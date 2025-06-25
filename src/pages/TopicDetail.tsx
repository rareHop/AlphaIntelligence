import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const TopicDetail: React.FC = () => {
  const { id } = useParams();
  
  const topics = {
    '1': {
      title: "What is Artificial Intelligence?",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: [
        "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
        
        "AI systems work by ingesting large amounts of labeled training data, analyzing the data for correlations and patterns, and using these patterns to make predictions about future states. In this way, a chatbot that is fed examples of text chats can learn to produce lifelike exchanges with people, or an image recognition tool can learn to identify and describe objects in images.",
        
        "The ideal characteristic of artificial intelligence is its ability to rationalize and take actions that have the best chance of achieving a specific goal. A subset of artificial intelligence is machine learning, which refers to the concept that computer programs can automatically learn from and adapt to new data without being assisted by humans.",
        
        "AI is used in many applications today, from recommendation systems on streaming platforms to voice assistants in our phones. As technology continues to advance, AI is becoming more integrated into our daily lives, helping us solve complex problems and making our interactions with technology more natural and intuitive."
      ]
    },
    '2': {
      title: "Machine Learning",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: [
        "Machine Learning (ML) is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.",
        
        "Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, and computer vision.",
        
        "There are three main types of machine learning: supervised learning (learning with labeled examples), unsupervised learning (finding patterns in data without labels), and reinforcement learning (learning through trial and error with rewards and penalties).",
        
        "Supervised learning uses labeled training data to learn a mapping from inputs to outputs. Unsupervised learning finds hidden patterns or structures in data without labeled examples. Reinforcement learning learns through interaction with an environment, receiving rewards or penalties for actions taken."
      ]
    },
    '3': {
      title: "Deep Learning",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: [
        "Deep Learning is a subset of machine learning that uses neural networks with multiple layers (hence 'deep') to model and understand complex patterns in data. These neural networks are inspired by the structure and function of the human brain.",
        
        "Deep learning has enabled many practical applications of machine learning and by extension the overall field of AI. Deep learning breaks down tasks in ways that makes all kinds of machine assists seem possible, even likely. Driverless cars, better preventive healthcare, even better movie recommendations, are all here today or on the horizon.",
        
        "Deep learning models can automatically learn representations from data such as images, video or text, without introducing hand-coded rules or human domain knowledge. Their highly flexible architecture can learn directly from raw data and can increase their predictive accuracy when provided with more data.",
        
        "The key advantage of deep learning is its ability to automatically discover the representations needed for feature detection or classification from raw data. This eliminates the need for manual feature engineering and allows the model to learn complex patterns that might be difficult for humans to identify."
      ]
    },
    '4': {
      title: "Natural Language Processing",
      image: "https://images.pexels.com/photos/8386641/pexels-photo-8386641.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: [
        "Natural Language Processing (NLP) is a branch of artificial intelligence that helps computers understand, interpret and manipulate human language. NLP draws from many disciplines, including computer science and computational linguistics, in its pursuit to fill the gap between human communication and computer understanding.",
        
        "NLP makes it possible for humans to talk to machines. This branch of AI enables computers to understand, interpret, and manipulate human language. NLP has existed for more than 50 years and has roots in the field of linguistics. It has a variety of real-world applications in a number of fields, including medical research, search engines and business intelligence.",
        
        "Common NLP tasks include text classification, sentiment analysis, language translation, speech recognition, and chatbot development. Modern NLP systems use machine learning and deep learning techniques to achieve human-like understanding of text and speech.",
        
        "Recent advances in NLP, particularly with transformer models like GPT and BERT, have revolutionized the field. These models can understand context, generate human-like text, and perform complex language tasks with remarkable accuracy."
      ]
    },
    '5': {
      title: "Computer Vision",
      image: "https://images.pexels.com/photos/8386648/pexels-photo-8386648.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: [
        "Computer Vision is a field of artificial intelligence that trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects — and then react to what they 'see.'",
        
        "Computer vision works much the same as human vision, except humans have a head start. Human sight has the advantage of lifetimes of context to train how to tell objects apart, how far away they are, whether they are moving and whether there is something wrong in an image.",
        
        "Computer vision applications include medical image analysis, facial recognition, autonomous vehicles, quality control in manufacturing, and augmented reality. The field combines methods from acquired images, signal processing, geometry, statistics, and learning theory to build models that can extract information from image data.",
        
        "Modern computer vision systems use convolutional neural networks (CNNs) to process images. These networks can automatically learn to detect features like edges, shapes, and objects, making them incredibly powerful for tasks like image classification, object detection, and image segmentation."
      ]
    },
    '6': {
      title: "AI in Robotics",
      image: "https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: [
        "AI in Robotics combines artificial intelligence with mechanical engineering to create intelligent machines that can perform tasks autonomously or assist humans in various activities. AI gives robots the ability to see, understand, and interact with their environment in meaningful ways.",
        
        "Robotics AI involves several key technologies including computer vision for perception, natural language processing for communication, machine learning for adaptation, and path planning for navigation. These technologies work together to create robots that can operate in complex, real-world environments.",
        
        "Applications of AI in robotics span across industries: manufacturing robots that can adapt to different products, service robots that assist in healthcare and hospitality, exploration robots for space and deep-sea missions, and personal robots that help with household tasks.",
        
        "The integration of AI makes robots more flexible, intelligent, and capable of working alongside humans safely. Modern robots can learn from experience, adapt to new situations, and make decisions based on their understanding of the environment and their goals."
      ]
    }
  };

  const topic = topics[id as keyof typeof topics];

  if (!topic) {
    return (
      <div className="pt-20 px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Topic not found</h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Topics
        </Link>

        {/* Topic Content */}
        <article className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
          <img 
            src={topic.image} 
            alt={topic.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {topic.title}
            </h1>
            
            <div className="prose prose-invert max-w-none">
              {topic.content.map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">
                Want to learn more?
              </h3>
              <p className="text-slate-300 mb-4">
                Ask our AI assistant any questions about {topic.title.toLowerCase()} or other AI topics.
              </p>
              <Link 
                to="/chat"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with AI
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TopicDetail;