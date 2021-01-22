import { Request, Response } from "express";
import { updateStudent } from "../data/updateStudent";

export const studentInMission = async (req: Request, res: Response) => {
    try {
      const {missionId, studentId} = req.body
  
    if(!req.body.missionId){throw new Error("Favor indicar o id da turma")}
    if(!req.body.studentId){throw new Error("Favor indicar o id do aluno")}

      await updateStudent(missionId, studentId)
  
      res.status(200).send("Estudante adicionado a turma com sucesso")
    } catch (error) {
      res.send(error.message)
    }
  }