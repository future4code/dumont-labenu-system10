import { Request, Response } from "express";
import { addStudent } from "../data/createStudent";

export const createStudent = async (req: Request, res: Response) => {
    try {
      const {name, email, birthdate} = req.body
  
    if(!req.body.name){throw new Error("Favor indicar nome")}
    if(!req.body.email){throw new Error("Favor indicar email")}
    if(!req.body.birthdate){throw new Error("Favor indicar data de nascimento")}

      await addStudent(name,email,birthdate)
  
      res.status(200).send("Estudante criado com sucesso")
    } catch (error) {
      res.send(error.message)
    }
  }