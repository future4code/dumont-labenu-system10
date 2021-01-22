import { connection } from "..";

export const removeStudentMission = async(id: number): Promise<any> =>{
await connection.raw(`
UPDATE student SET mission_id = null WHERE id = "${id}"
`)}
