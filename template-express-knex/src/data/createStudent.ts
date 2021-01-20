import { connection } from "..";

export const addStudent = async(name: string, email: string, birthdate:string): Promise<any> =>{
await connection.raw(`
     insert into student values(
     ${Math.trunc(Date.now()/10000)},
      "${name}",
      "${email}",
      "${birthdate}",
      null
      )
     `)}