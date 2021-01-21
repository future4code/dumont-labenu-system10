import { connection } from "..";
import { studentOutput } from "../types/studentOutput";

export const selectMissionStudents = async (mission_id: number): Promise<studentOutput[]> => {
  const result = await connection("student")
    .select("name", "email", "birthdate")
    .where({mission_id})

  return result
}