import { connection } from "..";

export const deleteStudent = async(id: number): Promise<any> =>{
await connection.raw(`
     delete from student where id = "${id}"
`)}