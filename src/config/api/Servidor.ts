import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import rutasCursos from "../../cursos/rutas/rutasCursos";

class Server {
  public app: express.Application;
  public port: string;
  constructor() {
    this.app = express();
    config({ path: "./.env" });

    this.port = process.env.SERVER_PORT || "8082";
    this.iniciarConfiguracion();
    this.activarRutas();
  }
  public iniciarConfiguracion(): void {
    this.app.set("PORT", this.port);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }
  public activarRutas(): void {
    this.app.use("/api/cursos", rutasCursos);
    
  }
  public start(): void {
    const puerto = this.app.get("PORT");
    this.app.listen(puerto, () => {
      console.log("servidor corriendo en ", puerto);
    });
  }
}
export default Server;
