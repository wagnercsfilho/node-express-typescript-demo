"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const newsService_1 = require("../services/newsService");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        newsService_1.default.get().then(news => {
            helper_1.default.sendResponse(res, HttpStatus.OK, news);
        });
    }
    getById(req, res) { }
    create(req, res) { }
    update(req, res) { }
    delete(req, res) { }
}
exports.default = new NewsController();
