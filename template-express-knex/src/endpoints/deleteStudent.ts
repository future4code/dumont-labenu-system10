import { Request, Response } from "express";
import { deleteStudent } from "../data/deleteStudent";

export const deleteStudentFunction = async (req: Request, res: Response) => {
    try {
      const {id} = req.body
  
    if(!req.body.id){throw new Error("Favor indicar id")}

      await deleteStudent(id)
  
      res.status(200).send("Estudante deletado com sucesso")
    } catch (error) {
      res.send(error.message)
    }
  }