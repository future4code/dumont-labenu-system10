import { connection } from "..";
import {modulo, turma} from "../endpoints/postTurma"

export const createTurma = async (turma:turma): Promise<any> => {
  await connection("mission")
 .insert(turma)
}

