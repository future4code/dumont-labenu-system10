import { Request, Response } from "express";
import { selectStudentBirthdate } from '../data/selectStudentAgeById'

export const getStudentAge = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    if (!Number(id)) {
      res.statusCode = 422
      throw new Error("ID do aluno inválido!")
    }

    const result = await selectStudentBirthdate(Number(id))

    if(!result.length) {
      res.statusCode = 404
      throw new Error("Aluno não encontrado!")
    }

    const birthdate = result[0].birthdate
    const today: Date = new Date
    const age = Math.trunc(((today.getTime() - new Date(birthdate).getTime())/ (1000 * 3600 * 24)) / 365.25)

    res.status(200).send({idade: age})
  } catch (error) {
    res.send(error.message)
  }
}