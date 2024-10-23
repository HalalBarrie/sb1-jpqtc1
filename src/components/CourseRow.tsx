import React from 'react';
import { MinusCircle } from 'lucide-react';
import { Course, standardGradePoints, weightedGradePoints } from '../types';

interface CourseRowProps {
  course: Course;
  onUpdate: (id: number, field: keyof Course, value: string | number) => void;
  onRemove: (id: number) => void;
  canRemove: boolean;
  isWeighted: boolean;
}

export const CourseRow: React.FC<CourseRowProps> = ({ 
  course, 
  onUpdate, 
  onRemove,
  canRemove,
  isWeighted
}) => {
  const gradePoints = isWeighted ? weightedGradePoints : standardGradePoints;

  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Course Name"
        value={course.name}
        onChange={(e) => onUpdate(course.id, 'name', e.target.value)}
        className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
      />
      <select
        value={course.credits}
        onChange={(e) => onUpdate(course.id, 'credits', parseInt(e.target.value))}
        className="w-24 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
      >
        {[1, 2, 3, 4, 5].map(credit => (
          <option key={credit} value={credit}>{credit} cr.</option>
        ))}
      </select>
      <select
        value={course.grade}
        onChange={(e) => onUpdate(course.id, 'grade', e.target.value)}
        className="w-24 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
      >
        {Object.keys(gradePoints).map(grade => (
          <option key={grade} value={grade}>
            {grade} ({gradePoints[grade]})
          </option>
        ))}
      </select>
      {canRemove && (
        <button
          onClick={() => onRemove(course.id)}
          className="text-red-500 hover:text-red-600 transition-colors"
        >
          <MinusCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};