import { Request, Response } from "express";
import { changeStudentMission } from "../data/changeStudentMission";

export const changeStudentMissionFunction = async (req: Request, res: Response) => {
    try {
      const {studentId,missionId} = req.body
  
    if(!req.body.missionId){throw new Error("Favor indicar id da turma")}
    if(!req.body.studentId){throw new Error("Favor indicar id do estudante")}

      await changeStudentMission(studentId,missionId)
    
      res.status(200).send("Turma alterada com sucesso")
    } catch (error) {
      res.send(error.message)
    }
  }