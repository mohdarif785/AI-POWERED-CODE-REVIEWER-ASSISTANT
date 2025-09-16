import { 
  CodeBracketIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  HeartIcon,
  AcademicCapIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead AI Engineer',
      image: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=3b82f6&color=fff&size=200',
      bio: '10+ years in AI/ML with expertise in code analysis and natural language processing.'
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Full-Stack Developer',
      image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=10b981&color=fff&size=200',
      bio: 'Full-stack developer passionate about creating intuitive user experiences and scalable systems.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps & Security Specialist',
      image: 'https://ui-avatars.com/api/?name=Michael+Rodriguez&background=f59e0b&color=fff&size=200',
      bio: 'Security expert focused on building secure, reliable infrastructure for code analysis platforms.'
    }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We continuously push the boundaries of AI-powered code analysis to provide cutting-edge solutions.'
    },
    {
      icon: HeartIcon,
      title: 'Quality',
      description: 'We are committed to delivering the highest quality code reviews and recommendations.'
    },
    {
      icon: UserGroupIcon,
      title: 'Community',
      description: 'We believe in empowering the developer community with tools that make coding better for everyone.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning',
      description: 'We foster continuous learning and improvement in coding practices and software development.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Code Reviews Completed' },
    { number: '10K+', label: 'Active Developers' },
    { number: '25+', label: 'Programming Languages' },
    { number: '99.9%', label: 'Uptime Reliability' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-600 rounded-full">
                <CodeBracketIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CodeReviewer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to help developers write better code through 
              AI-powered analysis and expert-level feedback. Our platform combines 
              cutting-edge technology with years of software development expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every developer deserves access to expert-level code reviews. 
                Our AI-powered platform democratizes code quality by providing instant, 
                comprehensive feedback that helps developers learn and improve.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're a beginner learning to code or an experienced developer 
                working on complex projects, our platform adapts to your needs and 
                provides valuable insights to enhance your coding skills.
              </p>
              <div className="flex items-center space-x-4">
                <GlobeAltIcon className="h-8 w-8 text-primary-600" />
                <span className="text-gray-700 font-medium">
                  Serving developers worldwide across 25+ programming languages
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-8 shadow-2xl">
                <div className="text-green-400 font-mono text-sm">
                  <div className="mb-4">
                    <span className="text-blue-400">const</span> mission = {'{'}
                  </div>
                  <div className="ml-4 space-y-2">
                    <div>
                      <span className="text-yellow-400">goal</span>: 
                      <span className="text-green-300">'Improve code quality'</span>,
                    </div>
                    <div>
                      <span className="text-yellow-400">method</span>: 
                      <span className="text-green-300">'AI-powered analysis'</span>,
                    </div>
                    <div>
                      <span className="text-yellow-400">impact</span>: 
                      <span className="text-green-300">'Better software'</span>
                    </div>
                  </div>
                  <div className="mt-4">{'};'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach 
              to building better developer tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate developers and AI experts behind CodeReviewer, 
              dedicated to improving the way we write and review code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Have questions about our platform or want to learn more about 
            how we can help improve your code quality? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@codereviewer.com"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;