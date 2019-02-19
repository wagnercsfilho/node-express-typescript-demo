"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./infra/db");
const newsController_1 = require("./controller/newsController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1" });
        });
        this.app.route("/api/v1/news").get(newsController_1.default.get);
    }
}
exports.default = new StartUp();
