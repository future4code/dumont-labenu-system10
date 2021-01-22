import { Request, Response } from "express";
import { removeStudentMission } from "../data/removeStudentMission";

export const removeStudentMissionFunction = async (req: Request, res: Response) => {
    try {
      const {id} = req.body
  
    if(!req.body.id){throw new Error("Favor indicar id")}

      await removeStudentMission(id)
  
      res.status(200).send("Estudante removido da turma com sucesso")
    } catch (error) {
      res.send(error.message)
    }
  }