import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { insertTeacherInMission } from "./endpoints/insertTeacherInMission";
import { createStudent } from "./endpoints/newStudent";
import {studentInMission} from "./endpoints/insertStudentInMission"

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints aqui
app.post('/mission/addTeacher', insertTeacherInMission)
app.post('/createstudent',createStudent)
app.post('/studenttomission',studentInMission)

//  async function addStudentMission(req:Request, res:Response):Promise<void>{
//    try {
//     if(!req.body.missionId){throw new Error("Favor indicar o id da turma")}
//     if(!req.body.studentId){throw new Error("Favor indicar o id do aluno")}
//      await connection.raw(`
//      update student
//      set mission_id = ${req.body.missionId}
//      where id = ${req.body.studentId}
//      `)
//      res.status(200).send("Estudante adicionado a turma com sucesso")
//    } catch (error) {
      
//      res.status(400).send(error.message)
//    }
//  }

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
