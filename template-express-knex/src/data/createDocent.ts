import { connection } from "..";

export const updateDocente = async (id: number, name: string,email:string,birthdate:string): Promise<any> => {
  await connection("teacher")
 .insert({id:id,name:name,email:email,birthdate:birthdate })
}