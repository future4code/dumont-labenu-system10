import { connection } from "..";

export const selectStudentBirthdate = async (id: number): Promise<any> => {
  const result = await connection("student")
    .select("birthdate")
    .where({id})

  return result
}