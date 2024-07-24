/**
 * Rutas
 * @module rutas
 */
import { Router } from "express";
import { actualizarEstado, crearFactura, listarFactura, mostrarFactura } from "../controllers/controllers.factura";


const rutaFactura = Router();
/**
 * Se utiliza la rutaFactura para poder llamar las constancias hechas mediante
 * los controladores de facturas
 */
rutaFactura.get("/:id", mostrarFactura);
rutaFactura.get("/", listarFactura);
rutaFactura.post("/", crearFactura);
rutaFactura.put("/:id", actualizarEstado);


export default rutaFactura;