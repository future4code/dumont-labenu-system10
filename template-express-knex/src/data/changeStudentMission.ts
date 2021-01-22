import { connection } from "..";

export const changeStudentMission = async(studentId: number,missionId:number): Promise<any> =>{
await connection.raw(`
UPDATE student SET mission_id = ${missionId} WHERE id = ${studentId}
`)}