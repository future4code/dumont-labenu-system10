import { connection } from "..";

    export const updateStudent = async(missionId: number, studentId: number):Promise<void>=>{
      await connection.raw(`
      update student
      set mission_id = ${missionId}
      where id = ${studentId}
      `)
  }