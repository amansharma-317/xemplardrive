import React, { useState } from 'react';
import {
  Car,
  Smartphone,
  BarChart3,
  Shield,
  CheckCircle2,
  AlertCircle,
  Users,
  ArrowRight,
  Clock,
  Activity,
  ChevronRight,
  Menu,
  X,
  LineChart,
  Bell,
  Settings,
  Map,
} from 'lucide-react';

const features = [
  {
    title: 'Smartphone-Based Telematics',
    description: 'No expensive hardware needed. Transform any smartphone into a powerful telematics device.',
    icon: Smartphone,
  },
  {
    title: 'Real-Time Driver Behavior Analysis',
    description: 'Monitor speeding, harsh braking, and distracted driving in real-time.',
    icon: Activity,
  },
  {
    title: 'Fleet Manager Portal',
    description: 'Comprehensive dashboard with actionable insights and detailed reports.',
    icon: BarChart3,
  },
  {
    title: 'Safety Campaigns & Training',
    description: 'Built-in tools to promote and reinforce safe driving habits.',
    icon: Shield,
  },
];

const adminFeatures = [
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Get instant insights into fleet performance, driver behavior, and safety metrics.',
    icon: LineChart,
  },
  {
    title: 'Live Vehicle Tracking',
    description: 'Track your entire fleet in real-time with detailed route history and playback.',
    icon: Map,
  },
  {
    title: 'Instant Notifications',
    description: 'Receive immediate alerts for safety violations, maintenance needs, and critical events.',
    icon: Bell,
  },
  {
    title: 'Custom Reports & Analytics',
    description: 'Generate detailed reports and analytics tailored to your business needs.',
    icon: Settings,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fleet Manager, LogiTech Solutions',
    content: 'Xemplar Drive has transformed how we manage our fleet. The smartphone-based approach saved us thousands in hardware costs.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director, FastTrack Delivery',
    content: 'The real-time insights have helped us improve our safety scores by 47% in just three months.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    fleetSize: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
          <div className="flex items-center">
        <img 
          src="https://www.xemplardrive.com/assets/images/xdrive_businessnew.svg" 
          alt="Xemplar Drive Logo" 
          className="h-8"
        />
      </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#admin-portal" className="text-gray-600 hover:text-gray-900">Admin Portal</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
              <a href="#admin-portal" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Admin Portal</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Testimonials</a>
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<div className="relative bg-gradient-to-r from-blue-600 to-blue-700 pt-16">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 mix-blend-multiply" />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-800 bg-opacity-50 mb-8">
          <span className="text-sm font-medium text-white">New: AI-Powered Risk Assessment</span>
        </div>
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:leading-tight">
          Enhance Fleet Safety with Low-Cost Telematics
        </h1>
        <p className="mt-6 text-lg text-blue-100 sm:text-xl max-w-3xl">
          Transform your fleet management with smartphone-based telematics. Monitor driver behavior, improve safety, and reduce costs—all from a single platform.
        </p>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-xl backdrop-blur-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Your Free Trial</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-700">Fleet Size</label>
                <select
                  id="fleetSize"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
                  value={formData.fleetSize}
                  onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
                  required
                >
                  <option value="">Select fleet size</option>
                  <option value="1-10">1-10 vehicles</option>
                  <option value="11-50">11-50 vehicles</option>
                  <option value="51-200">51-200 vehicles</option>
                  <option value="200+">200+ vehicles</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start 1-Month Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Then ₹599/month. No credit card required for trial.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>14-day money-back guarantee</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <div className="relative mx-auto w-full">
          <div className="relative flex justify-center space-x-4">
            {/* Phone Screenshot 1 - Visible on all screens */}
            <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-4 transform sm:rotate-[-5deg] shadow-xl">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                <img 
                  src="https://www.xemplardrive.com/assets/images/i-Driving-Stats.png" 
                  alt="Driver App Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Phone Screenshot 2 - Only visible on desktop */}
            <div className="hidden sm:block w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-4 transform rotate-[5deg] shadow-xl">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5633AQFgO2nma9Eznw/productpage-image_1128_635/productpage-image_1128_635/0/1701933863733/xemplarinsights_xemplar_auto_ubi_telematics_solution_image?e=2147483647&v=beta&t=GcPyJUR1LidMx1dRBJW1kp4eN_XYDVMSdMs-_yfAHPA" 
                  alt="Manager App Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features for Modern Fleet Management
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to manage your fleet efficiently and safely.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* Product Screenshots Section */}
<div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Experience the Xemplar Drive Mobile App
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
        Intuitive interface designed for both drivers and managers on the go
      </p>
    </div>
    
    <div className="mt-16 relative">
      {/* Desktop View - Side by Side */}
      <div className="hidden md:flex justify-between items-center">
        <div className="text-center">
          <img
            src="https://www.xemplardrive.com/assets/images/i-dashboardnew.png"
            alt="Driver Dashboard"
            className="mx-auto max-w-full h-auto"
          />
          <p className="mt-4 text-center text-gray-700 font-medium">Driver Dashboard</p>
        </div>
        
        <div className="text-center">
          <img
            src="https://www.xemplardrive.com/assets/images/i-Trip-Details.png"
            alt="Trip Details"
            className="mx-auto max-w-full h-auto"
          />
          <p className="mt-4 text-center text-gray-700 font-medium">Trip Details</p>
        </div>
        
        <div className="text-center">
          <img
            src="https://www.xemplardrive.com/assets/images/i-Safety%20Campaigns.png"
            alt="Safety Campaigns"
            className="mx-auto max-w-full h-auto"
          />
          <p className="mt-4 text-center text-gray-700 font-medium">Safety Campaigns</p>
        </div>
      </div>
      
      {/* Mobile View - Carousel */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto pb-8 space-x-8 snap-x">
          {/* Screenshot 1 - Driver Dashboard */}
          <div className="flex-shrink-0 w-64 snap-center">
            <div className="text-center">
              <img
                src="https://www.xemplardrive.com/assets/images/i-dashboardnew.png"
                alt="Driver Dashboard"
                className="mx-auto max-w-full h-auto"
              />
              <p className="mt-4 text-center text-gray-700 font-medium">Driver Dashboard</p>
            </div>
          </div>
          
          {/* Screenshot 2 - Trip Details */}
          <div className="flex-shrink-0 w-64 snap-center">
            <div className="text-center">
              <img
                src="https://www.xemplardrive.com/assets/images/i-Trip-Details.png"
                alt="Trip Details"
                className="mx-auto max-w-full h-auto"
              />
              <p className="mt-4 text-center text-gray-700 font-medium">Trip Details</p>
            </div>
          </div>
          
          {/* Screenshot 3 - Safety Campaigns */}
          <div className="flex-shrink-0 w-64 snap-center">
            <div className="text-center">
              <img
                src="https://www.xemplardrive.com/assets/images/i-Safety%20Campaigns.png"
                alt="Safety Campaigns"
                className="mx-auto max-w-full h-auto"
              />
              <p className="mt-4 text-center text-gray-700 font-medium">Safety Campaigns</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Controls for Mobile */}
        <div className="flex justify-center mt-6 space-x-2">
          <button className="w-2 h-2 rounded-full bg-blue-600"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Admin Portal Section */}
      <div id="admin-portal" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Administrative Web Portal for Fleet Managers & Owners
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Take control of your fleet operations with our comprehensive web portal. Access real-time data, generate reports, and make informed decisions from anywhere.
              </p>
              <div className="mt-8">
                {adminFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start mt-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <feature.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Admin Dashboard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reinforcement CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Enhance Your Fleet Safety and Reduce Operating Costs
              </h2>
              <p className="mt-4 text-xl text-blue-100">
                Join hundreds of fleet managers who have improved driver safety and reduced insurance premiums by up to 20% with Xemplar Drive.
              </p>
              
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#how-it-works" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-600 transition-colors">
                  Learn How It Works
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Reduced Accident Rates</h3>
                      <p className="mt-1 text-sm text-gray-500">Our customers report up to 45% reduction in accident rates within 6 months</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Lower Insurance Premiums</h3>
                      <p className="mt-1 text-sm text-gray-500">Negotiating better insurance rates with data-backed safety records</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Quick Setup</h3>
                      <p className="mt-1 text-sm text-gray-500">Get your entire fleet set up in less than a day - no hardware installation needed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
<div id="how-it-works" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        How Xemplar Drive Works
      </h2>
    </div>

    <div className="mt-16">
      <div className="relative">
        <div className="absolute inset-0 flex items-center hidden sm:flex" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">
          {[
            { 
              icon: Smartphone, 
              text: 'Install App',
              description: 'Download our easy-to-use app on any smartphone. No special hardware needed.'
            },
            { 
              icon: Users, 
              text: 'Add Drivers',
              description: 'Invite your team members to join. Setup takes less than 5 minutes per driver.'
            },
            { 
              icon: Activity, 
              text: 'Monitor Activity',
              description: 'Track driving behavior in real-time with automatic trip detection and scoring.'
            },
            { 
              icon: BarChart3, 
              text: 'Analyze Data',
              description: 'Get actionable insights with our AI-powered analytics and customizable reports.'
            },
          ].map((step, index) => (
            <div key={index} className="bg-gray-50 px-4 max-w-xs mx-auto sm:mx-0">
              <div className="relative text-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="mt-3 font-medium text-gray-900">{step.text}</p>
                <p className="mt-2 text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Fleet Managers Worldwide
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center lg:text-left">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Start your free trial today.</span>
            <span className="mt-2 text-xl font-normal block">1 month free, then ₹599/month</span>
          </h2>
          <div className="mt-8 flex justify-center lg:justify-start lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Start Free Trial
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
<footer className="bg-gray-100 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-1">
        <img src="https://www.xemplardrive.com/assets/images/xemplar_logo.svg" alt="Xemplar Insights" className="h-10 w-auto mb-4" />
        <p className="text-sm text-gray-600 mt-2">
          Digital transformation solutions for fleet management and driver safety.
        </p>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-600">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="col-span-1">
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Solutions</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Fleet Management</a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Driver Safety</a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Analytics</a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Vehicle Tracking</a>
          </li>
        </ul>
      </div>

      {/* Company Links */}
      <div className="col-span-1">
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">About Us</a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a>
          </li>
          <li>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="col-span-1">
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
        <ul className="mt-4 space-y-2">
          <li className="text-base text-gray-600">
            <span className="block">USA: 1-844-900-XEMP (9367)</span>
          </li>
          <li className="text-base text-gray-600">
            <span className="block">India: +91-9440473879</span>
          </li>
          <li className="text-base text-gray-600">
            <a href="mailto:info@xemplardrive.com" className="hover:text-gray-900">
              info@xemplardrive.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Xemplar Insights, LLC. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* Responsive AI Chat Help Icon - Add this at the end of your body content, just before closing body tag */}
<div className="fixed z-50 transition-all duration-300">
  {/* Desktop Version */}
  <div className="hidden md:block fixed bottom-6 right-6">
    <button 
      onClick={() => {/* Add your chat open function here */}} 
      className="w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Open AI Chat Assistant"
    >
      <img 
        src="https://ds0o9jgwrkvdk.cloudfront.net/xyla_chat_bot.svg" 
        alt="AI Chat Assistant" 
        className="w-14 h-14 group-hover:scale-110 transition-transform duration-300" 
      />
      <span className="absolute -top-10 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Ask Xyla
      </span>
    </button>
  </div>

  {/* Mobile Version */}
  <div className="md:hidden fixed bottom-4 right-4">
    <button 
      onClick={() => {/* Add your chat open function here */}} 
      className="w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-white active:bg-white flex items-center justify-center transition-all duration-300"
      aria-label="Open AI Chat Assistant"
    >
      <img 
        src="https://ds0o9jgwrkvdk.cloudfront.net/xyla_chat_bot.svg" 
        alt="AI Chat Assistant" 
        className="w-8 h-8" 
      />
      {/* Small dot indicator to draw attention */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
    </button>
  </div>
</div>
    </div>
    
  );
}

export default App;