/**
 * Rutas
 * @module Rutas
 */
import { Router } from "express";
import { ListarPago, MostrarPago, crearPago, eliminarPago } from "../controllers/controllers.metopago";

const rutaMetoPago = Router()

/**
 * Rutas para poder utilizar los metodos de pago
 */
rutaMetoPago.get("/:id", MostrarPago);
rutaMetoPago.get("/", ListarPago);
rutaMetoPago.post("/", crearPago );
rutaMetoPago.delete("/:id", eliminarPago );


export default rutaMetoPago;
