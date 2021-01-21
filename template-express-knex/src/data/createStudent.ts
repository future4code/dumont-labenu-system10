import { connection } from "..";

export const addStudent = async(name: string, email: string, birthdate:string): Promise<any> =>{
await connection.raw(`
     insert into student values(
       ${Date.now()},
      "${name}",
      "${email}",
      "${birthdate}",
      null
      )
     `)}