/**
 * Rutas
 * @module Rutas
 */
import { Router } from "express";
import rutaProducto from "./routes.producto";
import rutaUsuario from "./routes.usuario";
import rutaProveedor from "./routes.proveedor";
import rutaFactura from "./routes.facturas";
import rutaMetoPago from "./routes.metopago";
import rutaLogin from "./routes.login";
import routesPedidos from "./routes.pedido";

/**
 * Se creo la constancia ruta para el Router
 */
const ruta = Router();

/**
 * Se utilizo la ruta que se creo para poder llamar a todas las rutas
 */
ruta.use("/producto", rutaProducto);
ruta.use("/usuario", rutaUsuario);
ruta.use("/proveedor", rutaProveedor);
ruta.use("/factura", rutaFactura);
ruta.use("/metopago", rutaMetoPago);
ruta.use("/pedido", routesPedidos)

 /**
  * Se utilizo la ruta para el login
  */
ruta.use("/", rutaLogin);


export default ruta;