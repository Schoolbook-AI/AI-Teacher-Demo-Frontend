
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Book, User } from 'lucide-react';

const DashboardHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Teacher Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Mr. Yash Tondon</h2>
            <p className="text-sm text-slate-600">Mathematics Teacher</p>
          </div>
        </div>

        {/* Center: Date and Time */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="flex items-center gap-2 text-slate-700 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Today</span>
            </div>
            <div className="text-lg font-semibold text-slate-900">
              {formatDate(currentTime)}
            </div>
          </div>
          
          <div className="w-px h-12 bg-slate-200"></div>
          
          <div className="text-center">
            <div className="flex items-center gap-2 text-slate-700 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Current Time</span>
            </div>
            <div className="text-lg font-semibold text-blue-600">
              {formatTime(currentTime)}
            </div>
          </div>
        </div>

        {/* Right: Navigation */}
        <nav className="flex items-center gap-4">
          <button className="academic-button-secondary">
            <Book className="w-4 h-4" />
            All Lectures
          </button>
          <button className="academic-button-primary">
            <Calendar className="w-4 h-4" />
            Today's Schedule
          </button>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
