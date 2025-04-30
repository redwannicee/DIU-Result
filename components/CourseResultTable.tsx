import React from "react";
import { Table } from "@nextui-org/react";

type Course = {
  courseCode: string;
  courseTitle: string;
  creditHours: number;
  grade: string;
  gradePoint: number;
};

const CourseResultTable = ({ courses }: { courses: Course[] }) => {
  if (!courses || courses.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">📘 Course-wise Results</h2>
      <Table isStriped aria-label="Course Results Table">
        <Table.Header>
          <Table.Column>Course Code</Table.Column>
          <Table.Column>Title</Table.Column>
          <Table.Column>Credits</Table.Column>
          <Table.Column>Grade</Table.Column>
          <Table.Column>Grade Point</Table.Column>
        </Table.Header>
        <Table.Body>
          {courses.map((course, index) => (
            <Table.Row key={index}>
              <Table.Cell>{course.courseCode}</Table.Cell>
              <Table.Cell>{course.courseTitle}</Table.Cell>
              <Table.Cell>{course.creditHours}</Table.Cell>
              <Table.Cell>{course.grade}</Table.Cell>
              <Table.Cell>{course.gradePoint.toFixed(2)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CourseResultTable;
