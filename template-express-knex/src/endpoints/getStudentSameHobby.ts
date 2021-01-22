import dayjs from "dayjs";
import { Request, Response } from "express";
import { selectStudentsSameHobby } from "../data/selectStudentsSameHobby";
import { studentOutput } from "../types/studentOutput";

export const getStudentSameHobby = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id)

    if(!id){
      res.statusCode = 422
      throw new Error("Favor indicar o id do hobby")
    }

    const result = await selectStudentsSameHobby(id)

    if(!result.length) {
      res.statusCode = 404
      throw new Error("Hobby não encontrada!")
    }

    result.map((student: studentOutput) => {
      return student.birthdate = dayjs(student.birthdate).format('DD/MM/YYYY')
    })

    res.status(200).send(result)
  } catch (error) {
    res.send(error.message)
  }
}