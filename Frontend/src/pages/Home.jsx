import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  CodeBracketIcon, 
  SparklesIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze your code for best practices, performance, and maintainability.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Review',
      description: 'Identify potential security vulnerabilities and get recommendations for secure coding practices.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Performance Optimization',
      description: 'Get suggestions to improve code performance and reduce resource consumption.'
    }
  ];

  const benefits = [
    'Instant code analysis and feedback',
    'Support for multiple programming languages',
    'Best practice recommendations',
    'Security vulnerability detection',
    'Performance optimization tips',
    'Clean, maintainable code suggestions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full">
                <SparklesIcon className="h-5 w-5 text-primary-600" />
                <span className="text-primary-700 font-medium text-sm">AI-Powered Code Review</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Write Better Code with
              <span className="text-primary-600 block">Expert AI Review</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Get instant, professional code reviews powered by advanced AI. 
              Improve code quality, catch bugs early, and learn best practices 
              from a senior developer's perspective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              {user ? (
                <Link
                  to="/review"
                  className="btn-primary text-lg px-8 py-3 inline-flex items-center space-x-2 group"
                >
                  <span>Start Code Review</span>
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="btn-primary text-lg px-8 py-3 inline-flex items-center space-x-2 group"
                  >
                    <span>Get Started Free</span>
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link
                    to="/review"
                    className="btn-secondary text-lg px-8 py-3"
                  >
                    Try Demo
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-bounce-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Better Code
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive code analysis 
              with actionable insights and recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Code Review Platform?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the power of AI-driven code analysis that helps you 
                write cleaner, more efficient, and more secure code.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
{`function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// AI Review: ✅ Good structure
// 💡 Consider using reduce() for 
//    better functional programming
// 🔧 Add input validation`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Code?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of developers who are already writing better code 
            with our AI-powered review platform.
          </p>
          
          {user ? (
            <Link
              to="/review"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center space-x-2 group"
            >
              <CodeBracketIcon className="h-6 w-6" />
              <span>Start Reviewing Code</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          ) : (
            <Link
              to="/register"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center space-x-2 group"
            >
              <span>Get Started Today</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;