import { connection } from "..";

export const updateTeacher = async (id: number, mission_id: number | null): Promise<any> => {
  await connection("teacher")
    .where({id})
    .update({mission_id})
}