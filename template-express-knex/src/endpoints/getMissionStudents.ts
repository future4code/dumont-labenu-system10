import dayjs from "dayjs";
import { Request, Response } from "express";
import { selectMissionStudents } from "../data/selectMissionStudents";
import { studentOutput } from "../types/studentOutput";

export const getMissionStudents = async (req: Request, res: Response) => {
  try {
    const mission_id = req.params.id

    if (!Number(mission_id)) {
      res.statusCode = 422
      throw new Error("ID da turma inválido!")
    }

    const result = await selectMissionStudents(Number(mission_id))

    
    if(!result.length) {
      res.statusCode = 404
      throw new Error("Turma não encontrada!")
    }
    
    result.map((student: studentOutput) => {
      return student.birthdate = dayjs(student.birthdate).format('DD/MM/YYYY')
    })

    res.status(200).send(result)
  } catch (error) {
    res.send(error.message)
  }
}