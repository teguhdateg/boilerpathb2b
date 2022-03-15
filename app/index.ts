import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import Routes from "~/libraries/routes";
import Services from "~/libraries/services";

const app: Express = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("services", Services);

/** Server */
const httpServer = http.createServer(app);
Routes(app);
 
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
