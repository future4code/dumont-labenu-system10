import { Request, Response } from "express";
import { updateTeacher } from "../data/updateTeacher";

export const removeTeacherFromMission = async (req: Request, res: Response) => {
  try {
    const {id} = req.body

    if(!id) {
      res.statusCode = 422
      throw new Error ("ID do docente e ID da turma são obrigatorios!")
    }

    if(!Number(id)) {
      res.statusCode = 422
      throw new Error ("ID do docente ou ID da turma inválidos!")
    }

    await updateTeacher(Number(id), null)

    res.status(200).send("Docente removido da turma com sucesso!")
  } catch (error) {
    res.send(error.message)
  }
}