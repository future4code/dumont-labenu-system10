import { connection } from "..";

export const selectStudentsSameHobby = async (id: number): Promise<any> => {
  const result = await connection("student")
    .join("student_hobby", "student.id", "=", "student_hobby.student_id")
    .join("hobby", "student_hobby.hobby_id", "=", "hobby.id")
    .select("student.name", "student.email", "student.birthdate", "hobby.name as hobby_Name")
    .where("hobby.id", id)

  return result
}