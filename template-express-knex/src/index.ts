import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { insertTeacherInMission } from "./endpoints/insertTeacherInMission";
import { createStudent } from "./endpoints/newStudent";
import {studentInMission} from "./endpoints/insertStudentInMission"
import {deleteStudentFunction} from "./endpoints/deleteStudent"
import { removeStudentMissionFunction } from "./endpoints/removeStudentMission";
import { changeStudentMissionFunction } from "./endpoints/changeStudentMission";

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


app.post('/mission/addTeacher', insertTeacherInMission)
app.post('/createstudent',createStudent)
app.post('/studenttomission',studentInMission)
app.delete('/deletestudent',deleteStudentFunction)
app.delete('/removemission',removeStudentMissionFunction)
app.put('/changemission',changeStudentMissionFunction)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
