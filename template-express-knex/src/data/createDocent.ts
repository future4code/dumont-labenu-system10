import { connection } from "..";
import { docente } from "../endpoints/postDocente";

export const createDocente = async (docente : docente): Promise<any> => {
  await connection("teacher")
 .insert(docente)
}