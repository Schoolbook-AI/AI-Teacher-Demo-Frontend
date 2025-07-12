
import React, { useState } from 'react';
import { GraduationCap, BookOpen, ChevronRight, Sparkles, Users, Brain, Clock, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ProfileSelectionScreen = () => {
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);

  const handleProfileSelect = (profileType: 'teacher' | 'student') => {
    console.log(`Selected profile: ${profileType}`);
    // Navigation would happen here in a real app
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex flex-col">
      {/* Header Section */}
      <div className="flex-shrink-0 text-center pt-12 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <BookOpen className="h-10 w-10 text-blue-600" />
              <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Schoolbook AI
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            AI-powered learning for every classroom
          </p>
          <p className="text-sm md:text-base text-slate-500 mt-2 max-w-xl mx-auto">
            Where teachers and students learn together with AI
          </p>
        </div>
      </div>

      {/* Profile Selection Cards */}
      <div className="flex-1 flex items-start justify-center px-6 pb-12">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Teacher Profile Card */}
            <Card 
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                hoveredProfile === 'teacher' ? 'ring-4 ring-blue-300' : ''
              }`}
              onMouseEnter={() => setHoveredProfile('teacher')}
              onMouseLeave={() => setHoveredProfile(null)}
              onClick={() => handleProfileSelect('teacher')}
            >
              <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white relative h-full">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/10 rounded-lg rotate-12"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-8 w-8 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">Teacher</h3>
                      <p className="text-blue-200 text-sm font-medium">Educator Portal</p>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed">
                    Transform your teaching with AI-powered tools designed to enhance classroom engagement and streamline lesson delivery.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-8 flex-grow">
                    <div className="flex items-center gap-3 text-sm text-blue-100">
                      <Lightbulb className="w-5 h-5 text-blue-300 flex-shrink-0" />
                      <span>Create AI-powered lesson plans</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-blue-100">
                      <Brain className="w-5 h-5 text-blue-300 flex-shrink-0" />
                      <span>Generate AI-powered lectures</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-blue-100">
                      <Users className="w-5 h-5 text-blue-300 flex-shrink-0" />
                      <span>Play AI lectures in classroom</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-white text-blue-800 hover:bg-blue-50 font-semibold py-4 text-lg group-hover:scale-105 transition-all duration-300 mt-auto"
                    size="lg"
                  >
                    <span>I am a Teacher</span>
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Student Profile Card */}
            <Card 
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                hoveredProfile === 'student' ? 'ring-4 ring-purple-200' : ''
              }`}
              onMouseEnter={() => setHoveredProfile('student')}
              onMouseLeave={() => setHoveredProfile(null)}
              onClick={() => handleProfileSelect('student')}
            >
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white relative h-full">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-6 right-6 w-20 h-20 bg-yellow-300 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-pink-300 rounded-full blur-lg"></div>
                  <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-orange-300 rounded-full blur-md"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0 opacity-30">
                  <Sparkles className="absolute top-8 right-12 h-6 w-6 text-yellow-300 animate-pulse" />
                  <Sparkles className="absolute bottom-12 left-16 h-4 w-4 text-pink-300 animate-pulse delay-1000" />
                  <Sparkles className="absolute top-1/3 right-1/4 h-5 w-5 text-orange-300 animate-pulse delay-500" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">Student</h3>
                      <p className="text-purple-100 text-sm font-medium">Learning Hub</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-100 text-base md:text-lg mb-8 leading-relaxed">
                    Experience personalized learning with your AI companion, available whenever you need help with studies.
                  </p>
                  
                  <div className="flex flex-col gap-4 mb-8 flex-grow">
                    <div className="flex items-center gap-3 text-sm text-purple-100">
                      <Brain className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                      <span>Learn with AI Tutor</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-purple-100">
                      <BookOpen className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                      <span>Get homework help</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-purple-100">
                      <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                      <span>24/7 availability</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:from-yellow-500 hover:to-orange-500 font-semibold py-4 text-lg group-hover:scale-105 transition-all duration-300 shadow-lg mt-auto"
                    size="lg"
                  >
                    <span>I am a Student</span>
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelectionScreen;
