
import React from 'react';
import DashboardHeader from './DashboardHeader';
import PeriodCard from './PeriodCard';
import { Coffee } from 'lucide-react';

const DayViewDashboard = () => {
  const schedule = [
    {
      period: 1,
      time: '9:00 - 9:40 AM',
      classSection: '8A',
      subject: 'Mathematics',
      topic: 'Linear Equations in One Variable',
      status: 'completed' as const
    },
    {
      period: 2,
      time: '9:45 - 10:25 AM',
      classSection: '8B',
      subject: 'Mathematics', 
      topic: 'Rational Numbers',
      status: 'completed' as const
    },
    {
      period: 3,
      time: '10:30 - 11:10 AM',
      classSection: '',
      subject: '',
      topic: '',
      status: 'free' as const
    },
    {
      period: 4,
      time: '11:15 - 11:55 AM',
      classSection: '11A',
      subject: 'Mathematics',
      topic: 'Binomial Theorem',
      status: 'upcoming' as const,
      isNextClass: true
    },
    {
      period: 5,
      time: '1:35 - 2:15 PM',
      classSection: '9A',
      subject: 'Mathematics',
      topic: 'Polynomials',
      status: 'upcoming' as const
    },
    {
      period: 6,
      time: '2:20 - 3:00 PM',
      classSection: '9B',
      subject: 'Mathematics',
      topic: 'Coordinate Geometry',
      status: 'upcoming' as const
    },
    {
      period: 7,
      time: '3:05 - 3:45 PM',
      classSection: '11B',
      subject: 'Mathematics',
      topic: 'Permutations and Combinations',
      status: 'upcoming' as const
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Today's Schedule</h1>
          <p className="text-slate-600">
            Your daily lecture schedule and upcoming classes
          </p>
        </div>

        <div className="space-y-4">
          {schedule.map((item, index) => (
            <React.Fragment key={item.period}>
              <PeriodCard
                period={item.period}
                time={item.time}
                classSection={item.classSection}
                subject={item.subject}
                topic={item.topic}
                status={item.status}
                isNextClass={item.isNextClass}
              />
              
              {/* Lunch break after period 4 */}
              {item.period === 4 && (
                <div className="flex items-center justify-center py-6">
                  <div className="flex items-center gap-3 bg-amber-50 text-amber-700 px-4 py-2 rounded-full border border-amber-200">
                    <Coffee className="w-4 h-4" />
                    <span className="text-sm font-medium">Lunch Break (12:00 - 1:35 PM)</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-center text-sm text-slate-500">
            <p>All times are automatically synced with the school system</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DayViewDashboard;
