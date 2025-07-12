
import React from 'react';
import { Check, Clock, BookOpen, FileText } from 'lucide-react';

interface PeriodCardProps {
  period: number;
  time: string;
  classSection: string;
  subject: string;
  topic: string;
  status: 'completed' | 'current' | 'upcoming' | 'free';
  isNextClass?: boolean;
}

const PeriodCard: React.FC<PeriodCardProps> = ({
  period,
  time,
  classSection,
  subject,
  topic,
  status,
  isNextClass = false
}) => {
  const getCardStyles = () => {
    switch (status) {
      case 'completed':
        return 'period-card period-card-completed';
      case 'current':
        return 'period-card period-card-current';
      case 'free':
        return 'period-card period-card-current';
      default:
        return 'period-card period-card-upcoming';
    }
  };

  const getStatusIcon = () => {
    if (status === 'completed') {
      return <Check className="w-5 h-5 text-green-600" />;
    }
    if (status === 'current' || status === 'free') {
      return <Clock className="w-5 h-5 text-blue-600" />;
    }
    return <BookOpen className="w-5 h-5 text-slate-400" />;
  };

  if (status === 'free') {
    return (
      <div className={getCardStyles()}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {getStatusIcon()}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-600">Period {period}</span>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-slate-600">{time}</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mt-1">Free Period</h3>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                You have a free period. You haven't yet created lecture notes or a lecture for your next class (11A: Binomial Theorem). Would you like to use this time to prepare them?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={getCardStyles()}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Period {period}</span>
              <span className="text-sm text-slate-500">•</span>
              <span className="text-sm text-slate-600">{time}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mt-1">
              Class {classSection} - {subject}
            </h3>
            <p className="text-slate-600 mt-1">{topic}</p>
          </div>
        </div>
        
        {status === 'completed' && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
            Completed
          </span>
        )}
      </div>

      {isNextClass && status === 'upcoming' && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="flex gap-3">
            <button className="academic-button-primary flex-1 justify-center">
              <FileText className="w-4 h-4" />
              Create Lecture Notes
            </button>
            <button className="academic-button-secondary flex-1 justify-center">
              <BookOpen className="w-4 h-4" />
              Create Lecture
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodCard;
