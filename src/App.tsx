import React, { useState } from 'react';
import { PlusCircle, GraduationCap } from 'lucide-react';
import { Course } from './types';
import { InfoPanel } from './components/InfoPanel';
import { CourseRow } from './components/CourseRow';
import { GPADisplay } from './components/GPADisplay';
import { GradeSystemToggle } from './components/GradeSystemToggle';

function App() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: '', credits: 3, grade: 'A' }
  ]);
  const [showInfo, setShowInfo] = useState(false);
  const [isWeighted, setIsWeighted] = useState(false);

  const addCourse = () => {
    setCourses([...courses, { 
      id: courses.length + 1,
      name: '',
      credits: 3,
      grade: 'A'
    }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id: number, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-800">GPA Calculator</h1>
            </div>
            <InfoPanel showInfo={showInfo} setShowInfo={setShowInfo} />
          </div>

          <GradeSystemToggle isWeighted={isWeighted} onToggle={setIsWeighted} />

          <div className="space-y-4">
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
                onUpdate={updateCourse}
                onRemove={removeCourse}
                canRemove={courses.length > 1}
                isWeighted={isWeighted}
              />
            ))}
          </div>

          <button
            onClick={addCourse}
            className="mt-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Course</span>
          </button>

          <GPADisplay courses={courses} isWeighted={isWeighted} />
        </div>
      </div>
    </div>
  );
}

export default App;