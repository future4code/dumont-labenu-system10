import { connection } from "..";
import {modulo} from "../endpoints/postTurma"

export const updateTurma = async (id: number, name: string, startdate:string,enddate:string, module:modulo): Promise<any> => {
  await connection("mission")
 .insert({id:id,name:name,startdate:startdate,enddate:enddate,module:module })
}