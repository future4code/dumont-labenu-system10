import { Request, Response } from "express";
import { updateTeacher } from "../data/updateTeacher";

export const insertTeacherInMission = async (req: Request, res: Response) => {
  try {
    const {id, mission_id} = req.body

    if(!id || !mission_id) {
      res.statusCode = 422
      throw new Error ("ID do docente e ID da turma são obrigatorios!")
    }

    if(!Number(id) || !Number(mission_id)) {
      res.statusCode = 422
      throw new Error ("ID do docente ou ID da turma inválidos!")
    }

    await updateTeacher(Number(id), Number(mission_id))

    res.status(200).send("Docente adicionado a turma com sucesso!")
  } catch (error) {
    res.send(error.message)
  }
}