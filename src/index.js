/**
 * @module IndexPrincipal
 */
import { mensa, mensajeconsola } from "./message/mensaje"
import server from "./server";


/**
 * Este es el index principal donde se ejecuta el puerto
 */


server.listen(server.get("port"),()=> {
    mensajeconsola("AccesoPuerto",
        `${mensa.puerto} ${server.get("port")} ${server.get("port")}`)
})