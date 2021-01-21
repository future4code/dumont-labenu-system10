import { connection } from "..";
import { teacherOutput } from "../types/teacherOutput";

export const selectMissionTeachers = async (mission_id: number): Promise<teacherOutput[]> => {
  const result = await connection("teacher")
    .select("name", "email", "birthdate")
    .where({mission_id})

  return result
}