/**
 * Rutas
 * @module Rutas
 * 
 */
import { Router } from "express";
import { crearProveedor, eliminarProveedor,
         listarProveedor, mostrarProveedor } from "../controllers/controllers.proveedor";


 /**
  * Se utilizo las rutas proveedores para poder mostrar, listar, crear y eliminar 
  * los proveedores
  */        
const rutaProveedor = Router();

rutaProveedor.get("/:id", mostrarProveedor)
rutaProveedor.get("/", listarProveedor)
rutaProveedor.post("/", crearProveedor )
rutaProveedor.delete("/:id", eliminarProveedor)


export default rutaProveedor;