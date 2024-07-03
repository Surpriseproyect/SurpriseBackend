/**
 * Rutas
 * @module Rutas
 */
import { Router } from "express";
import { crearProducto, eliminarProducto,
     listarProducto, modificarProducto,
      mostrarProducto } from "../controllers/controllers.producto";


 /**
  * Se utilizo las rutas productos para poder mostrar, listar, crear, modificar y eliminar los
  * productos
  */     
 const rutaProducto = Router();

 rutaProducto.get("/:id", mostrarProducto)
 rutaProducto.get("/", listarProducto)
 rutaProducto.post("/", crearProducto)
 rutaProducto.put("/:id", modificarProducto)
 rutaProducto.delete("/:id", eliminarProducto)


export default rutaProducto;