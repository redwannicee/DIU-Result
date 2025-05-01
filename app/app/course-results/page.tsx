'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Mocked course result data (replace with real fetch later)
const courseResults = [
  { courseCode: 'CSE101', courseName: 'Introduction to Programming', grade: 'A', marks: 90 },
  { courseCode: 'CSE102', courseName: 'Data Structures', grade: 'B+', marks: 82 },
  { courseCode: 'MAT101', courseName: 'Calculus I', grade: 'A-', marks: 88 },
  { courseCode: 'ENG101', courseName: 'English Composition', grade: 'A', marks: 93 },
];

export default function CourseResultsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Course-wise Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseResults.map((course) => (
          <Card key={course.courseCode} className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{course.courseName}</h2>
              <p className="text-sm text-gray-500 mb-2">{course.courseCode}</p>
              <div className="flex justify-between text-base">
                <span className="font-medium">Grade:</span>
                <span className="font-bold text-green-600">{course.grade}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="font-medium">Marks:</span>
                <span className="font-bold">{course.marks}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
