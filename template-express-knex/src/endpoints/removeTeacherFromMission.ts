import { Request, Response } from "express";
import { updateTeacher } from "../data/updateTeacher";

export const removeTeacherFromMission = async (req: Request, res: Response) => {
  try {
    const {id} = req.body

    if(!id) {
      res.statusCode = 422
      throw new Error ("O ID da turma é obrigatorio!")
    }

    if(!Number(id)) {
      res.statusCode = 422
      throw new Error ("ID da turma inválido!")
    }

    await updateTeacher(Number(id), null)

    res.status(200).send("Docente removido da turma com sucesso!")
  } catch (error) {
    res.send(error.message)
  }
}