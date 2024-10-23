export interface Course {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

export const standardGradePoints: Record<string, number> = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'F': 0.0
};

export const weightedGradePoints: Record<string, number> = {
  'A+': 15, 'A': 15, 'A-': 14,
  'B+': 13, 'B': 12, 'B-': 11,
  'C+': 10, 'C': 9, 'C-': 8,
  'D+': 7, 'D': 6, 'F': 0
};