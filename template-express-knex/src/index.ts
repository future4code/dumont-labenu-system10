import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { insertTeacherInMission } from "./endpoints/insertTeacherInMission";
import { getStudentAge } from "./endpoints/getStudentAge";
import { removeTeacherFromMission } from "./endpoints/removeTeacherFromMission";

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
app.get('/student/age/:id', getStudentAge)
app.post('/mission/addTeacher', insertTeacherInMission)
app.post('/mission/removeTeacher', removeTeacherFromMission)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
