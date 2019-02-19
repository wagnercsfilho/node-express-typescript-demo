import * as HttpStatus from "http-status";
import NewsService from "../services/newsService";
import helper from "../infra/helper";

class NewsController {
  get(req, res) {
    NewsService.get().then(news => {
      helper.sendResponse(res, HttpStatus.OK, news);
    });
  }
  getById(req, res) {}
  create(req, res) {}
  update(req, res) {}
  delete(req, res) {}
}

export default new NewsController();
