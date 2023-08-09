import studentData from "../../data/students.json";

interface Student {
  id: number;
  name: string;
}

export function getAllUserNames(): string[] {
  const userNames = studentData.map((student) => student.name);
  return userNames;
}

export function getStudentById(studentId: number): Student | undefined {
  const student = studentData.find((student) => student.id === studentId);
  return student;
}
