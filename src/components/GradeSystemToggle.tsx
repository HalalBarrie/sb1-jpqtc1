import React from 'react';
import { Scale } from 'lucide-react';

interface GradeSystemToggleProps {
  isWeighted: boolean;
  onToggle: (weighted: boolean) => void;
}

export const GradeSystemToggle: React.FC<GradeSystemToggleProps> = ({ isWeighted, onToggle }) => {
  return (
    <div className="flex items-center gap-4 mb-6 p-4 bg-indigo-50 rounded-lg">
      <Scale className="w-5 h-5 text-indigo-600" />
      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggle(false)}
          className={`px-4 py-2 rounded-lg transition-all ${
            !isWeighted
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-indigo-100'
          }`}
        >
          4.0 Scale
        </button>
        <button
          onClick={() => onToggle(true)}
          className={`px-4 py-2 rounded-lg transition-all ${
            isWeighted
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-indigo-100'
          }`}
        >
          15-Point Scale
        </button>
      </div>
    </div>
  );
};