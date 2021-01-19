import { connection } from "..";

export const updateTeacher = async (id: number, mission_id: number): Promise<any> => {
  await connection("teacher")
    .where({id})
    .update({mission_id})
}