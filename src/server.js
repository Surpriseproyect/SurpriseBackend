/**
 * Server Principal
 * @module Server
 */
import express from "express";
import { config } from "dotenv";
import ruta from "./routes/index";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
import cors from "cors";
import morgan from "morgan";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './tools/swagger-output.json';
import os from "node:os";
config();

/**
 * Se utilizo las constancias para poder conectar el frontend de las vistas con el backend
 */
// const __filename = fileURLToPath(new URL(import.meta.url));
const __filename = process.cwd();
const __dirname = dirname(__filename);
const server = express();
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
server.use("/docu", express.static(path.join(__dirname, "/doc")));
server.use(express.json());
server.use(express.urlencoded({ extended : true }));
server.use(cors());
server.use(morgan("dev"))
server.set("view engine", "ejs");
server.set("port", process.env.PORT || 3000)

/**
 * Esta es la ruta principal del login
 */
//Rutas
server.use("/", ruta);

/**
 * Esta es la ruta server para conectar el puerto con las vistas del frontend
 */





export default server;