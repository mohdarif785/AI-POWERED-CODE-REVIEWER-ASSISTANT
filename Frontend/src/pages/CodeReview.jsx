import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import { 
  PlayIcon, 
  DocumentTextIcon, 
  SparklesIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CodeReview = () => {
  const { user } = useAuth();
  const [code, setCode] = useState(`// Welcome to CodeReviewer! 
// Paste your code here and get instant AI-powered feedback
// Example:

function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// Click "Review Code" to get started!`);

  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    prism.highlightAll();
    // Load review count from localStorage
    const count = localStorage.getItem('reviewCount') || '0';
    setReviewCount(parseInt(count));
  }, []);

  const reviewCode = async () => {
    if (!code.trim()) {
      setReview('Please enter some code to review.');
      return;
    }

    setLoading(true);
    setReview('');

    try {
      const response = await axios.post('https://ai-powered-code-reviewer-assistant.onrender.com/ai/get-review', { code });
      setReview(response.data);
      
      // Update review count
      const newCount = reviewCount + 1;
      setReviewCount(newCount);
      localStorage.setItem('reviewCount', newCount.toString());
    } catch (error) {
      console.error('Error getting review:', error);
      setReview('Sorry, there was an error processing your code review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearCode = () => {
    setCode('');
    setReview('');
  };

  const loadExample = () => {
    setCode(`// Example: User authentication function
function authenticateUser(username, password) {
  if (!username || !password) {
    return false;
  }
  
  // Direct database query (potential security issue)
  const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  const result = database.query(query);
  
  if (result.length > 0) {
    return true;
  }
  return false;
}

// This code has several issues - try reviewing it!`);
    setReview('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <SparklesIcon className="h-7 w-7 text-primary-600" />
                <span>AI Code Review</span>
              </h1>
              <p className="text-gray-600 mt-1">
                Get instant feedback on your code quality, security, and performance
              </p>
            </div>
            {user && (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Reviews completed</p>
                  <p className="text-2xl font-bold text-primary-600">{reviewCount}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <DocumentTextIcon className="h-5 w-5" />
                <span>Your Code</span>
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={loadExample}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Load Example
                </button>
                <button
                  onClick={clearCode}
                  className="text-sm text-gray-500 hover:text-gray-700 font-medium"
                >
                  Clear
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 text-sm ml-4">code-editor</span>
              </div>
              
              <div className="relative">
                <Editor
                  value={code}
                  onValueChange={setCode}
                  highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                  padding={20}
                  style={{
                    fontFamily: '"Fira Code", "Fira Mono", Consolas, monospace',
                    fontSize: 14,
                    minHeight: '400px',
                    backgroundColor: '#1a1a1a',
                    color: '#f8f8f2'
                  }}
                  placeholder="Paste your code here..."
                />
              </div>
            </div>

            <button
              onClick={reviewCode}
              disabled={loading || !code.trim()}
              className="w-full btn-primary py-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <ClockIcon className="h-5 w-5 animate-spin" />
                  <span>Analyzing Code...</span>
                </>
              ) : (
                <>
                  <PlayIcon className="h-5 w-5" />
                  <span>Review Code</span>
                </>
              )}
            </button>
          </div>

          {/* Review Results */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <SparklesIcon className="h-5 w-5" />
              <span>AI Review Results</span>
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[500px]">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <ClockIcon className="h-12 w-12 text-primary-600 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Analyzing your code...</p>
                    <p className="text-sm text-gray-500 mt-2">This may take 10-15 seconds</p>
                  </div>
                </div>
              ) : review ? (
                <div className="p-6">
                  <div className="prose prose-sm max-w-none">
                    <Markdown rehypePlugins={[rehypeHighlight]}>
                      {review}
                    </Markdown>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-500">
                  <div className="text-center">
                    <DocumentTextIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Your AI review will appear here</p>
                    <p className="text-sm mt-2">Enter your code and click "Review Code" to get started</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">💡 Tips for Better Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• Include complete functions or classes for context</p>
              <p>• Add comments explaining complex logic</p>
              <p>• Specify the programming language if unclear</p>
            </div>
            <div className="space-y-2">
              <p>• Focus on specific areas you want feedback on</p>
              <p>• Include error handling and edge cases</p>
              <p>• Consider performance and security implications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeReview;