import React from 'react';
import { Calculator } from 'lucide-react';
import { Course, standardGradePoints, weightedGradePoints } from '../types';

interface GPADisplayProps {
  courses: Course[];
  isWeighted: boolean;
}

export const GPADisplay: React.FC<GPADisplayProps> = ({ courses, isWeighted }) => {
  const calculateGPA = () => {
    const gradePoints = isWeighted ? weightedGradePoints : standardGradePoints;
    const totalPoints = courses.reduce(
      (sum, course) => sum + gradePoints[course.grade] * course.credits,
      0
    );
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white shadow-lg">
      <div className="flex items-center gap-3">
        <Calculator className="w-6 h-6" />
        <h2 className="text-xl font-semibold">
          Your GPA ({isWeighted ? '15-Point Scale' : '4.0 Scale'})
        </h2>
      </div>
      <div className="mt-3 text-4xl font-bold">{calculateGPA()}</div>
    </div>
  );
};