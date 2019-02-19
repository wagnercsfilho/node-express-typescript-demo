import * as express from "express";
import * as bodyParser from "body-parser";
import Db from "./infra/db";
import NewsController from "./controller/newsController";

class StartUp {
  public app: express.Application;
  private _db: Db;

  constructor() {
    this.app = express();
    this._db = new Db();
    this._db.createConnection();
    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route("/").get((req: express.Request, res: express.Response) => {
      res.send({ versao: "0.0.1" });
    });

    this.app.route("/api/v1/news").get(NewsController.get);
  }
}

export default new StartUp();
